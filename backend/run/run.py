
# Importing libraries
from importlib import reload
import time
import json
from tabnanny import verbose
from algorithms.unfairAlgorithms.kCenters import KCenters
from metrics.balance import distance, balance_calculation
from data_loader import DataLoader
from algorithms.preprocessing.fairlet_decomposition import VanillaFairletDecomposition, MCFFairletDecomposition
import numpy as np
import matplotlib.pyplot as plt
import sys
import numpy as np
from collections import defaultdict
import algorithms.preprocessing.scalable_fairlet_decomposition as scalable
import matlab
import time

def run_algo(dataset_name,algorithm_name):

    source = dataset_name
    normalize = False
    degrees = 2
    degree =2
    balance=0.0
    cost=0.0
    # data loading 
    with open('config.json') as json_file:
        config = json.load(json_file)
    
    dl = DataLoader(source=source, fair_column=config[source]['fair_column'],
                fair_values=config[source]['fair_values'], distance_columns=config[source]['distance_columns'])
    dl.load(normalize)
    blues, reds = dl.split(split_size=tuple(config[source]['split_size']), random_state=config[source]['random_state'])
    
    # running unfair algo
    if algorithm_name== "kCenters":
        unfair_degrees = []
        unfair_costs = []
        unfair_balances = []

        start_time = time.time()
        kcenters = KCenters(k=degree)
        kcenters.fit(dl.data_list)
        mapping = kcenters.assign()
        cost=kcenters.costs[-1]
        balance=balance_calculation(dl.data_list, kcenters.centers, mapping)

    # running fair algo
    if algorithm_name== "MCF":
        # Instantiating the MCF Decomposition
        mcf = MCFFairletDecomposition(blues, reds, 2, config[source]['distance_threshold'], dl.data_list)

        # Computing the distance matrix between blue and red nodes
        mcf.compute_distances()

        # Adding nodes and edges
        mcf.build_graph(plot_graph=True)

        # Decomposing for fairlets and performing traditional clustering
        mcf_fairlets, mcf_fairlet_centers, mcf_fairlet_costs = mcf.decompose()
        curr_degrees = []
        curr_costs = []
        curr_balances = []
        data=dl.data_list
        start_time = time.time()
        kcenters = KCenters(k=degree)
        # print(data)
        print("222222222222222222222222222222222222222222222222")
        print(mcf_fairlet_centers)
        kcenters.fit([data[i] for i in mcf_fairlet_centers])
        mapping = kcenters.assign()
        final_clusters = []
        for fairlet_id, final_cluster in mapping:
            for point in mcf_fairlets[fairlet_id]:
                final_clusters.append((point, mcf_fairlet_centers[final_cluster]))
                
        centers = [mcf_fairlet_centers[i] for i in kcenters.centers]
        cost=max([min([distance(data[j], i) for j in centers]) for i in data])
        balance=balance_calculation(data, centers, final_clusters)
        if verbose:
                print("Time taken for Degree %d - %.3f seconds."%(degree, time.time() - start_time))
        
    
    if algorithm_name== "Scalable":
         
        colors = []
        points = []
        p=1
        q=5
        i = 0
        skipped_lines = 0
        for line in dl.data_list:
            if len(line) == 0:
                skipped_lines += 1
                continue
            tokens = line
            try:
                color = int(tokens[0])
            except:
                print("Invalid color label in line", i, ", skipping")
                skipped_lines += 1
                continue
            try:
                point = [float(x) for x in tokens[1:]]
            except:
                print("Invalid point coordinates in line", i, ", skipping")
                skipped_lines += 1
                continue
            colors.append(color)
            points.append(point)
            i += 1
        
            n_points = len(points)
            if  n_points == 0:
                print("No successfully parsed points in input file, terminating")
                sys.exit(0)
            dimension = len(points[0])
        
            dataset = np.zeros((n_points, dimension))
            for i in range(n_points):
                if len(points[i]) < dimension:
                    print("Insufficient dimension in line", i+skipped_lines, ", terminating")
                    sys.exit(0)
                for j in range(dimension):
                    dataset[i,j] = points[i][j]
        

            
        print("Number of data points:", n_points)
        print("Dimension:", dimension)
        print("Balance:", p, q)
        
        print("Constructing tree...")
        fairlet_s = time.time()
        root = scalable.build_quadtree(dataset)
        
        print("Doing fair clustering...")
        cost = scalable.tree_fairlet_decomposition(p, q, root, dataset, colors)
        fairlet_e = time.time()
        
        print("Fairlet decomposition cost:", cost)
        print("11111111111111111111111111")
        print(scalable.FAIRLET_CENTERS)
        print(len(scalable.FAIRLET_CENTERS))
        curr_degrees = []
        curr_costs = []
        curr_balances = []
        data=dl.data_list
        start_time = time.time()
        kcenters = KCenters(k=degree)
        kcenters.fit([data[i] for i in scalable.FAIRLET_CENTERS])
        mapping = kcenters.assign()
        final_clusters = []
        for fairlet_id, final_cluster in mapping:
            for point in scalable.FAIRLETS[fairlet_id]:
                final_clusters.append((point, scalable.FAIRLET_CENTERS[final_cluster]))
                
        centers = [scalable.FAIRLET_CENTERS[i] for i in kcenters.centers]
        cost=max([min([distance(data[j], i) for j in centers]) for i in data])
        balance=balance_calculation(data, centers, final_clusters)
        if verbose:
                print("Time taken for Degree %d - %.3f seconds."%(degree, time.time() - start_time))
        print(cost)
        print(balance)
        # print("Doing k-median clustering on fairlet centers...")
        # fairlet_center_idx = [dataset[index] for index in scalable.FAIRLET_CENTERS]
        # fairlet_center_pt = np.array([np.array(xi) for xi in fairlet_center_idx])
        
        # convert points into matlab array format
        # mat_matrix = matlab.double(fairlet_center_pt.tolist())
        
        # Run k-mediod code in Matlab
        
    
        # cluster_s = time.time()
        #eng = matlab.engine.start_matlab()
        
        # C: Cluster medoid locations, returned as a numeric matrix.
        # C is a k-by-d matrix, where row j is the medoid of cluster j
        #
        # midx: Index to mat_matrix, returned as a column vector of indices.
        # midx is a k-by-1 vector and the indices satisfy C = X(midx,:)
        # idx,C,sumd,D,midx,info = eng.kmedoids(mat_matrix, k,'Distance','euclidean', nargout=6)
        #cluster_e = time.time()
        
        #np_idx = (np.array(idx._data)).flatten()
        
        # compute the indices of centers returned by Matlab in its input matrix
        # which is mat_matrix or fairlet_center_pt
        # np_midx = (np.array(midx._data)).flatten()
        # c_idx_matrix = np_midx.astype(int)
        #in matlab, arrays are numbered from 1
        # c_idx_matrix[:] = [index - 1 for index in c_idx_matrix]
        
        # indices of center points in dataset
        # centroids = [scalable.FAIRLET_CENTERS[index] for index in c_idx_matrix]
        
        # print("Computing fair k-median cost...")
        # kmedian_cost = scalable.fair_kmedian_cost(centroids, dataset)
        print("Fairlet decomposition cost:", cost)
        # print("k-Median cost:", kmedian_cost)

    return balance,cost


       