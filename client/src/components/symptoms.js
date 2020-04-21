import React from "react";
import "../styles/symptoms.css";

const Symptoms = () => (
    <div className="container">
        <div className="symptomMain">
            <h4>SYMPTOMS</h4>
            <p>Select the symptom you may be experiencing: </p>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1">
                    
                </input>
                <label className="custom-control-label" for="customCheck1">Dry cough</label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck2">
                    
                </input>
                <label className="custom-control-label" for="customCheck2">Fever</label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck3">
                    
                </input>
                <label className="custom-control-label" for="customCheck3">Tiredness</label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck4">
                    
                </input>
                <label className="custom-control-label" for="customCheck4">Loss of smell or taste</label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck4">
                    
                </input>
                <label className="custom-control-label" for="customCheck4">Difficulty breathing</label>
            </div>

            <p>To get medically diagnosed, visit https://relymd.com </p>
        </div>
    </div>

);

export default Symptoms;
