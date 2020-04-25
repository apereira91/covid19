import React from "react";
import axios from "axios";
// import ReactDOM from "react-dom";


class checkInButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleClick= this.handleClick.bind(this);
    }


    // componentDidMount() {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         console.log("Latitude is:", pos ition.coords.latitude);
    //         console.log("Longitude is :", position.coords.longitude);
    //         // this.setState({ position:{ longitude: position.coords.longitude, latitude: position.coords.latitude} })
    //     });
    // } 

     handleClick() {
         const id = this.props.id;
         const mail = this.props.email;
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is:", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            const checkData = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
                user: id,
                email: mail
            }
            console.log(checkData);
            axios.post("/api/checks/", checkData);

    })
    

}

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick= {this.handleClick}>CHECK-IN</button>
            </div>
        );
    }
}

// const checkInButtonWithGeoloc = geolocated({
//     positionOptions: {
//         enableHighAccuracy: false,
//     },
//     userDecisionTimeout: 5000,
// }) (checkInButton);


export default checkInButton
