import React from "react";
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
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is:", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
    })
        console.log(this.props.id);
}

    render() {
        return (
            <div>
                <button onClick= {this.handleClick}>CHECK-IN</button>
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
