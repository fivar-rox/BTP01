import React from 'react';
import Header from '../Components/Header';
import {Image} from 'react-bootstrap' 
import '../main.css';
import {Link} from 'react-router-dom';

export default function Home() {

    return (
        <div style={{background:"#f8f1ea"}}>

            <div style={{ padding: "20px"}}>
            <h3>Fairness in Clustering</h3>
            This extensible open source toolkit can help you examine, <br/>report,and 
                mitigate discrimination and bias in machine learning <br/> models throughout the ML application lifecycle.
            </div>
            <div style={{ paddingLeft: "20px",paddingTop: "10px"}}>
            <p style={{fontSize:"20px"}}>Not sure what to do first? Start here!</p>
            </div>
            <div className="main">
                <ul className="cards">
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Read More</h2>
                        <p className="card_text">Learn more about fairness and bias mitigation concepts, terminology, and tools before you begin.</p>
                        <Link to="/apidocs" className="btn card_btn">See More</Link>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Try a Web Demo</h2>
                        <p className="card_text">Step through the process of checking and remediating bias in an interactive web demo that shows a sample of capabilities available in this toolkit.</p>
                        <Link to="/demo" className="btn card_btn">See More</Link>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">View Notebooks</h2>
                        <p className="card_text">Open a directory of Jupyter Notebooks in GitHub that provide working examples of bias detection and mitigation in sample datasets. Then share your own notebooks!</p>
                        <a href="https://github.com/guptakhil/fair-clustering-fairlets/blob/master/Fairlets.ipynb" class="btn card_btn" target="_blank">See More</a>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Contribute</h2>
                        <p className="card_text">You can add new metrics and algorithms in GitHub. Share Jupyter notebooks show-casing how you have examined and mitigated bias in your machine learning application.</p>
                        <a href="https://github.com/shreya28302/BTP" class="btn card_btn" target="_blank">See More</a>
                        </div>
                    </div>
                    
                    </li>
                    
                </ul>
                
            </div>
            


                    

            <div style={{ paddingLeft: "20px",paddingTop: "10px"}}>
            <p style={{fontSize:"20px"}}>These are few state-of-the-art bias mitigation algorithms that can address bias throughout ML systems. Add more!</p>
            </div>
            <div className="main">
                <ul className="cards">
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">MCF</h2>
                        <p className="card_text">This Algorithm introduces the concept of fairlets, which are subsets of data points that can be used to achieve fairness in clustering. It proposes a two-step approach where initial clusters are formed using a base clustering algorithm, followed by refining the clusters to satisfy fairness constraints based on fairlets.</p>
                        <a href="https://github.com/shreya28302/BTP/blob/main/backend/algorithms/preprocessing/fairlet_decomposition.py" class="btn card_btn" target="_blank">See More</a>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Scalable</h2>
                        <p className="card_text">Scalable algorithm for fair clustering, which can efficiently handle large datasets. uses techniques such as resampling, re-weighting, re-ranking, and parallel processing to ensure fairness in cluster compositions while addressing scalability challenges.</p>
                        <a href="https://github.com/shreya28302/BTP/blob/main/backend/algorithms/preprocessing/scalable_fairlet_decomposition.py" class="btn card_btn" target="_blank">See More</a>
                        </div>
                    </div>
                    
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Proportionality</h2>
                        <p className="card_text">This Algorithm proposes a fairness notion called proportionality fairness. Aims to ensure that each cluster contains a proportionate representation of different sensitive attribute groups. uses fairness constraints and optimization techniques to achieve proportionality fairness in cluster compositions.</p>
                        <a href="https://github.com/shreya28302/BTP/blob/main/backend/algorithms/inprocessing/Proportionality.py" class="btn card_btn" target="_blank">See More</a>
                        </div>
                    </div>
                    </li>
                </ul>
                
            </div>
            




            <div style={{ paddingLeft: "20px",paddingTop: "10px"}}>
            <p style={{fontSize:"20px"}}>Are individuals treated similarly? Are privileged and unprivileged groups treated similarly? Find out by using metrics like these that measure individual and group fairness.</p>
            <div className="main">
                <ul className="cards">
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Balance</h2>
                        <p className="card_text">Minimum ratio between protected group members in a cluster and protected group members in the data set, measured over all groups and clusters.</p>
                        <a href="https://github.com/shreya28302/BTP/blob/main/backend/metrics/balance.py" class="btn card_btn" target="_blank">See More</a>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Kmeans Cost</h2>
                        <p className="card_text"> Sum of the minimum of the distances squared to the cluster centers.</p>
                        <a href="https://github.com/shreya28302/BTP/blob/main/backend/metrics/cost.py" class="btn card_btn" target="_blank">See More</a>
                        </div>
                    </div>
                    
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Kcenter Cost</h2>
                        <p className="card_text"> Maximum of the minimum distance between any data point to the cluster center.</p>
                        <a href="https://github.com/shreya28302/BTP/blob/main/backend/metrics/cost.py" class="btn card_btn" target="_blank">See More</a>
                        </div>
                    </div>
                    
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Kmedian Cost</h2>
                        <p className="card_text"> Sum of the minimum of the distances to the cluster centers.</p>
                        <a href="https://github.com/shreya28302/BTP/blob/main/backend/metrics/cost.py" class="btn card_btn" target="_blank">See More</a>
                        </div>
                    </div>
                    
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Proportionality</h2>
                        <p className="card_text"> For n samples and k clusters, any n/k points are entitled to form their own cluster if there is another center that is closer in distance for all n/k points. Higher proportionality leads to high fairness.</p>
                        <a href="https://github.com/shreya28302/BTP/blob/main/backend/metrics/Rho.py" class="btn card_btn" target="_blank">See More</a>
                        </div>
                    </div>
                    
                    </li>
                    
                </ul>
                
            </div>
            




                
            </div>
        </div>
    ) 
}

 
