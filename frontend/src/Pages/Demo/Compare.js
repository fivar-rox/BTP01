import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import BarChart from 'react-bar-chart';
import '../../main.css';
import { ColorRing } from 'react-loader-spinner';

export default function Compare() {

    const location = useLocation();
    const dataset = location.state.data;
    const algorithm = location.state.algo;

    const [results, setResults] = React.useState({});
    const [mitigatedResults, setMitigatedResults] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const originalRequestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataset: dataset.name }) 
        };
        const mitigatedRequestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataset: dataset.name, algorithm:algorithm.name }) 
        };

        fetch("/original",originalRequestOptions).then((res) =>
            res.json().then((data) => {
                setResults(data)
            })
        );
        fetch("/mitigated",mitigatedRequestOptions).then((res) =>
            res.json().then((data) => {
                setMitigatedResults(data)
                setTimeout(() => setLoading(false), 2000);
            })
        );
    },[])

    const margin = {top: 20, right: 20, bottom: 30, left: 40};
     
    return (
        <>
         <div style={{background:"#f8f1ea", padding: "20px"}}>
        <div className="title"><h6>Fair Clustering - Demo</h6></div>
        <div class="stepper-wrapper " >
        <div class="progrow">
        <div class="stepper-item completed">
            <div class="step-counter">1</div>
            <div class="step-name">Data</div>
        </div>
        <div class="stepper-item completed">
            <div class="step-counter">2</div>
            <div class="step-name">Check</div>
        </div>
        <div class="stepper-item completed">
            <div class="step-counter">3</div>
            <div class="step-name">Mitigate</div>
        </div>
        <div class="stepper-item stepactive">
            <div class="step-counter">4</div>
            <div class="step-name">Compare</div>
        </div>
        </div>
        <div className="backnext" align="right">
        <Link to="/demo/mitigate" state={{data:dataset,algo:algorithm}}><Button color='primary'>Back</Button></Link>
        </div>
        </div>
        </div>
           
            <div style={{padding: "20px"}}>
            <b>4. Compare original vs. mitigated results</b>
            <br/>
            {loading ? 
            <>
            <ColorRing height="40" width="40" className="loading"/>
            <div style={{marginLeft: "25px"}} className="loading">Checking for bias</div>
            </>
            :
            <>
            <div style={{marginLeft: "25px"}}>
            Dataset: {dataset.name}
            <br/>
            Mitigation: {algorithm.name}
            </div>
            <div style={{paddingLeft: 30, marginTop: 30}}>
                
                <b>{results[0][0]}</b>
                <br/>
                <BarChart 
                  width={190}
                  height={180}
                  margin={margin}
                  data={[{text: 'Fair', value: mitigatedResults[1][0]}, {text: 'Unfair', value: results[1][0]}]}
                  />
                <br/>
                <b>{results[0][1]}</b>
                <br/>
                <BarChart 
                  width={190}
                  height={180}
                  margin={margin}
                  data={[{text: 'Fair', value: mitigatedResults[1][1]}, {text: 'Unfair', value: results[1][1]}]}
                  />
            </div>
            </>
            }
            </div>
        </>
    ) 
}