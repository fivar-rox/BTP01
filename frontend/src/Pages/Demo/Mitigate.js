import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Radio, RadioGroup} from 'react-radio-group'
import { Link } from 'react-router-dom'
import '../../main.css';

export default function Mitigate() {

    const location = useLocation();
    const dataset = location.state.data;
    var algorithm = location.state.algo;
    if (algorithm === null) {
        algorithm = {
            "name":"",
            "description":"",
        }
    }

    const [algorithms, setAlgorithms] = React.useState([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = React.useState(algorithm);

    React.useEffect(() => {
        fetch("/algorithms").then((res) =>
            res.json().then((data) => {
                
                setAlgorithms(data.algorithms)
            })
        );
    },[])

    const handleOnChange = (e) => {
        const algorithmName = e
        algorithms && algorithms.map(algo => {
            if (algo.name === algorithmName)
                setSelectedAlgorithm(algo)
        })
    }

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
        <div class="stepper-item stepactive">
            <div class="step-counter">3</div>
            <div class="step-name">Mitigate</div>
        </div>
        <div class="stepper-item">
            <div class="step-counter">4</div>
            <div class="step-name">Compare</div>
        </div>
        </div>
        <div className="backnext" align="right">
        <Link to="/demo/check" state={dataset}><Button color='primary'>Back</Button></Link>
        {selectedAlgorithm.name ? <Link to="/demo/compare" state={{data: dataset, algo: selectedAlgorithm}} className="backnext"><Button color='primary'>Next</Button></Link> : <Button color='primary' disabled={true} className="backnext">Next</Button> }
        </div>
        </div>
        </div>
        
            <div style={{padding: "20px"}}>
            <b>3. Choose Bias Mitigation Algorithm</b>            
            <br/>
            <RadioGroup onChange={(e) => handleOnChange(e)}>
            { algorithms && algorithms.map(algo => {
                return (
                <div key={algo.name} className="radio-button-background">
                    <Radio key={algo.name} value={algo.name} className="radio-button" checked={algo.name === selectedAlgorithm.name} style={{marginRight: "10px"}}/>{algo.name}
                    <div style={{marginLeft: "25px", marginBottom: "10px"}}>
                    {algo.description}
                    </div>
                </div>
                )
            }
            )}
            </RadioGroup>
            </div>
        </>
    ) 
}                   