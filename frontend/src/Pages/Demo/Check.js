import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import BarChart from 'react-bar-chart';
import '../../main.css';
import { ColorRing } from 'react-loader-spinner';

export default function Check() {
    const location = useLocation();
    const dataset = location.state;

    const [results, setResults] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataset: dataset.name }) 
        };

        fetch("/original", requestOptions)
        .then((res) =>res.json()
        .then((data) => {
            setResults(data); 
            setTimeout(() => setLoading(false), 2000);
        }));
        
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
        <div class="stepper-item stepactive">
            <div class="step-counter">2</div>
            <div class="step-name">Check</div>
        </div>
        <div class="stepper-item ">
            <div class="step-counter">3</div>
            <div class="step-name">Mitigate</div>
        </div>
        <div class="stepper-item">
            <div class="step-counter">4</div>
            <div class="step-name">Compare</div>
        </div>
        </div>
        <div className="backnext" align="right">
        <Link to="/demo" state={dataset}><Button color='primary'>Back</Button></Link>
        <Link to="/demo/mitigate" state={{data:dataset, algo:null}} className="backnext"><Button color='primary'>Next</Button></Link>
        </div>
        </div>
        </div>
       
            <div style={{padding: "20px"}}>
            <b>2. Check bias metrics</b>
            <br/>
            {loading ? 
            <div>
            <ColorRing height="40" width="40" className="loading"/>
            <div style={{marginLeft: "25px"}} className="loading">Checking for bias</div>
            </div>
            :
            <>
            <div style={{marginLeft: "25px"}}>
            Dataset: {dataset.name}
            <br />
            Mitigation: none
            </div>
            <div style={{paddingLeft: 30, marginTop: 30}}>
                <b>{results[0].name}</b>
                <br/>
                <BarChart 
                  width={190}
                  height={180}
                  margin={margin}
                  data={[{text: 'Unfair', value: results[0].value}]}
                  />
                {results[0].description}
                <br/>
                <b>{results[1].name}</b>
                <br/>
                <BarChart 
                  width={190}
                  height={180}
                  margin={margin}
                  data={[{text: 'Unfair', value: results[1].value}]}
                  />
                {results[1].description}
            </div>
            </>
            }
            </div>
            
        </>
    ) 
}