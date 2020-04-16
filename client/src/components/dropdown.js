import React from "react";

function Navbar() {
    return (
        <div className="dropdown">
            <a className="btn btn-primary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dashboard </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="/symptoms">Symptoms</a>
                    <a className="dropdown-item" href="/checkins">Check-Ins</a>
                    <a className="dropdown-item" href="/logout">Logout</a>
                </div>
        </div>
    )
}

export default Navbar;