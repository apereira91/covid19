import React from "react";
import axios from "axios";
// import ReactDOM from "react-dom";


class infectedButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleInfected = this.handleInfected.bind(this);
    }


    // componentDidMount() {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         console.log("Latitude is:", pos ition.coords.latitude);
    //         console.log("Longitude is :", position.coords.longitude);
    //         // this.setState({ position:{ longitude: position.coords.longitude, latitude: position.coords.latitude} })
    //     });
    // } 

    handleInfected() {
        const id = this.props.id;

        const dateFilter = [];
        const distanceFilter = [];
        // axios.get("/api/users/infected/" + id).then(res => res.data.checks.forEach(item => infectedUserChecks.push(item)));
        // axios.get("/api/checks/").then(res => res.data.forEach(item => otherUserChecks.push(item)));
        axios.all([
            axios.get("/api/users/infected/" + id),
            axios.get("/api/checks/")
        ])
            .then(axios.spread((infectedRes, otherRes) => {
                console.log(infectedRes);
                console.log(otherRes);
                for (let i = 0; i < infectedRes.data.checks.length; i++) {
                    for (let v = 0; v < otherRes.data.length; v++) {
                        let dateDifference = Math.abs(Date.parse(infectedRes.data.checks[i].date) - Date.parse(otherRes.data[v].date));
                        if (dateDifference < 3600000 && infectedRes.data.checks[i].user !== otherRes.data[v].user) {
                            dateFilter.push(otherRes.data[v]);
                        }
                    }

                };
                const uniqueSet = new Set(dateFilter)
                const newFilterArray = [...uniqueSet];
                console.log(newFilterArray);
                for (let z = 0; z < newFilterArray.length; z++) {
                    for (let y = 0; y < infectedRes.data.checks.length; y++) {
                        var R = 6371;
                        var dLat = (infectedRes.data.checks[y].latitude - newFilterArray[z].latitude) * Math.PI / 180;
                        var dLon = (infectedRes.data.checks[y].longitude - newFilterArray[z].longitude) * Math.PI / 180;
                        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                            Math.cos(newFilterArray[z].latitude * Math.PI / 180) * Math.cos(infectedRes.data.checks[y].latitude * Math.PI / 180) *
                            Math.sin(dLon / 2) * Math.sin(dLon / 2);
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                        var d = R * c;
                        if (d < 1) {
                            distanceFilter.push(newFilterArray[z]);
                        }
                    }
                };
                const uniqueSetTwo = new Set(distanceFilter)
                const lastFilterArray = [...uniqueSetTwo];
                console.log(lastFilterArray);
                for (let t = 0; t < lastFilterArray.length; t++) {

                }



                // for (let i = 0; i < otherUserChecks.length; i++) {
                //     for (let v = 0; v < infectedUserChecks.length; v++) {
                //         if (Date.now(otherUserChecks[i].date) - Date.now(infectedUserChecks[v].date) < 3600000 || Date.now(otherUserChecks[i].date) - Date.now(infectedUserChecks[v].date) > -3600000) {
                //             dateFilter.push(otherUserChecks[i]);
                //         }
                //     }
                // }
                // console.log(dateFilter);
            }))
    };



    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.handleInfected}>CHECK-IN</button>
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


export default infectedButton;
