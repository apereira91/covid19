import React from "react";
import "../styles/symptoms.css";
import Navbar from "./dropdown";

const Symptoms = () => (
    <div className="container">
        <Navbar />
        <div className="symptomMain">
            <h4>SYMPTOMS</h4>
            <p>Select the symptom you may be experiencing: </p>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1">
                    <label className="custom-control-label" for="customCheck1">Dry cough</label>
                </input>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck2">
                    <label className="custom-control-label" for="customCheck2">Fever</label>
                </input>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck3">
                    <label className="custom-control-label" for="customCheck3">Tiredness</label>
                </input>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck4">
                    <label className="custom-control-label" for="customCheck4">Loss of smell or taste</label>
                </input>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck4">
                    <label className="custom-control-label" for="customCheck4">Difficulty breathing</label>
                </input>
            </div>

            <p>To get medically diagnosed, visit https://relymd.com </p>
        </div>
    </div>

);

export default Symptoms;
