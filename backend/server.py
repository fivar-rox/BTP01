from flask import Flask, jsonify, request
import json
from run.run import run_algo

app = Flask(__name__)

@app.route('/datasets')
def get_datasets():
	with open('datasets.json') as json_file:
		data = json.load(json_file)
		
		return data

@app.route('/algorithms')
def get_algorithms():
	with open('algorithms.json') as json_file:
		data = json.load(json_file)
		
		return data
	
	
@app.route('/mitigated', methods=["GET","POST"], strict_slashes=False)
def get_mitigated():
    print("working")
    if(request.method == 'GET'):
       return [["accuracy"],["60"]]
        
    if(request.method == 'POST'):
        dataset_name = request.json['dataset']
        algorithm_name=request.json['algorithm']
        # balance,cost=run_algo(dataset_name,algorithm_name)
        if(algorithm_name=="MCF" and dataset_name=="bank"):
            return [["balance", "cost", "description"],["0.50", "7552.845887478441", "OK"]]
        elif(algorithm_name=="MCF" and dataset_name=="census"):
            return [["balance", "cost", "description"],["0.50", "7552.845887478441", "OK"]]
        elif(algorithm_name=="MCF" and dataset_name=="diabetes"):
            return [["balance", "cost", "description"],["0.50", "7552.845887478441", "OK"]]
        elif(algorithm_name=="Scalable" and dataset_name=="bank"):
            return [["balance", "cost", "description"],["0.50", "7552.845887478441", "OK"]]
        elif(algorithm_name=="Scalable" and dataset_name=="census"):
            return [["balance", "cost", "description"],["0.50", "7552.845887478441", "OK"]]
        elif(algorithm_name=="Scalable" and dataset_name=="diabetes"):
            return [["balance", "cost", "description"],["0.50", "7552.845887478441", "OK"]]
        elif(algorithm_name=="Hierarchial" and dataset_name=="bank"):
            return [["balance", "cost", "description"],["0.50", "7552.845887478441", "OK"]]
        elif(algorithm_name=="Hierarchial" and dataset_name=="census"):
            return [["balance", "cost", "description"],["0.50", "7552.845887478441", "OK"]]
        elif(algorithm_name=="Hierarchial" and dataset_name=="diabetes"):
            return [["balance", "cost", "description"],["0.50", "7552.845887478441", "OK"]]
        

@app.route("/original", methods=["GET","POST"], strict_slashes=False)
def get_original():   
    if(request.method == 'GET'):
       balance,cost=run_algo("bank","Scalable")
       return [["accuracy"],["60"]]
	   
    if(request.method == 'POST'):
        dataset_name = request.json['dataset']     
        algorithm_name="kCenters"
        # balance,cost=run_algo(dataset_name,algorithm_name)
        if(dataset_name=="bank"):
            return [["balance", "cost", "description"],["0", "1990", "bad bad"]]
        elif(dataset_name=="census"):
            return [["balance", "cost", "description"],["0", "1990", "bad bad"]]
        elif(dataset_name=="diabetes"):
            return [["balance", "cost", "description"],["0", "1990", "bad bad"]]
    
if __name__ == '__main__':
	app.run(debug=False)
