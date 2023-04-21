import React from 'react';
import Header from '../Components/Header';
import {Image} from 'react-bootstrap' 
import '../main.css';
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
                        <button className="btn card_btn">See More</button>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Try a Web Demo</h2>
                        <p className="card_text">Step through the process of checking and remediating bias in an interactive web demo that shows a sample of capabilities available in this toolkit.</p>
                        <button className="btn card_btn">See More</button>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">View Notebooks</h2>
                        <p className="card_text">Open a directory of Jupyter Notebooks in GitHub that provide working examples of bias detection and mitigation in sample datasets. Then share your own notebooks!</p>
                        <button className="btn card_btn">See More</button>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">Contribute</h2>
                        <p className="card_text">You can add new metrics and algorithms in GitHub. Share Jupyter notebooks show-casing how you have examined and mitigated bias in your machine learning application.</p>
                        <button className="btn card_btn">See More</button>
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
                        <h2 className="card_title">MCF Fiarlet Decomposition</h2>
                        <p className="card_text">Computes the optimized version of fairlet decomposition using minimum-cost flow.</p>
                        <button className="btn card_btn">See More</button>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">FairletDecomposition</h2>
                        <p className="card_text"> Computes vanilla fairlet decomposition that ensures fair clusters. It might not give the optimal cost value.</p>
                        <button className="btn card_btn">See More</button>
                        </div>
                    </div>
                    
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title">MCF Fiarlet Decomposition</h2>
                        <p className="card_text">Computes the optimized version of fairlet decomposition using minimum-cost flow.</p>
                        <button className="btn card_btn">See More</button>
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
                        <p className="card_text">minimum ratio between protected group members in a cluster and protected group membersin the dataset, measured over a;; groups and clusters</p>
                        <button className="btn card_btn">See More</button>
                        </div>
                    </div>
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title"> Social Fairness Cost</h2>
                        <p className="card_text"> minimum average center based clustering costs for each protected group, ensures nearby clusters are similar and a representative exists that accurately potrays the cluster</p>
                        <button className="btn card_btn">See More</button>
                        </div>
                    </div>
                    
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title"> Bounded Representation cost</h2>
                        <p className="card_text"> Clustering algorithm is constrained by two parameters that define the allowed maximum and minimum proportions of protected group members in a cluster.</p>
                        <button className="btn card_btn">See More</button>
                        </div>
                    </div>
                    
                    </li>
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                        <h2 className="card_title"> Proportionality</h2>
                        <p className="card_text"> For n samples and k clsuters, any n/k points are entitled to form thier own cluster if there is another center that is closer in distance for all n/k points.</p>
                        <button className="btn card_btn">See More</button>
                        </div>
                    </div>
                    
                    </li>
                    
                </ul>
                
            </div>
            




                
            </div>
        </div>
    ) 
}

 
