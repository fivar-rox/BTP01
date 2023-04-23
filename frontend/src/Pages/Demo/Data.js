import React from 'react';
import { Button } from 'react-bootstrap';
import { Radio, RadioGroup} from 'react-radio-group'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import '../../main.css';

export default function Data() {
    const location = useLocation();
    let dataset = location.state;
    if (dataset === null) {
        dataset = {
            "name":"",
            "description":"",
            "type":"",
            "protectedAttributes":[]
        }
    }

    const [datasets, setDatasets] = React.useState([]);
    const [selectedDataset, setSelectedDataset] = React.useState(dataset);

    React.useEffect(() => {
        fetch("/datasets").then((res) =>
            res.json().then((data) => {
                setDatasets(data.datasets)
            })
        );
    },[])

    const handleOnChange = (e) => {
        const datasetName = e
        datasets && datasets.map(data => {
            if (data.name === datasetName)
                setSelectedDataset(data)
        })
    }

    return (
        <> 
        {/* #fce2c4 */}
        <div style={{background:"#f8f1ea", padding: "20px"}}>
        <div className="title"><h6>Fair Clustering - Demo</h6></div>
        <div className="stepper-wrapper " >
        <div className="progrow">
        <div className="stepper-item stepactive">
            <div className="step-counter">1</div>
            <div className="step-name">Data</div>
        </div>
        <div className="stepper-item">
            <div className="step-counter">2</div>
            <div className="step-name">Check</div>
        </div>
        <div className="stepper-item ">
            <div className="step-counter">3</div>
            <div className="step-name">Mitigate</div>
        </div>
        <div className="stepper-item">
            <div className="step-counter">4</div>
            <div className="step-name">Compare</div>
        </div>
        </div>
        <div align="right">
                {selectedDataset.name ? <Link to="/demo/check" state={selectedDataset}><Button color='primary'>Next</Button></Link> : <Button color='primary' disabled={true}>Next</Button> }
                </div>
        </div>
        </div>
           
            
         
            <div style={{padding: "20px"}}>
            <b>1. Choose sample data set</b>
            <br/>
            <RadioGroup onChange={(e) => handleOnChange(e)}>
            { 
                datasets && datasets.map(data => {
                    return (
                        <div key={data.name} className="radio-button-background">
                            <Radio key={data.name} value={data.name} className="radio-button" checked={data.name === selectedDataset.name} style={{marginRight: "10px"}}/><b>{data.name}</b>
                            <div style={{marginLeft: "25px"}}>
                            {data.description}
                            <br/>
                            {data.type}
                            <br/>
                            {data.type === "binary" ? 
                            <>
                            Protected Attributes
                            <br/>
                            { 
                                data.protectedAttributes && data.protectedAttributes.map(att => {
                                    return (
                                        <div key={att.attributeName}>
                                        {att.attributeName}, privileged - {att.privileged}, unprivileged - {att.unprivileged} 
                                        <br/>
                                        </div>
                                    )
                                })
                            }
                            </>
                            : null}
                            
                            <br/>
                            </div>
                        </div>
                    )
                })
            }
            </RadioGroup>
            </div>
        </>
    ) 
}