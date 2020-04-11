import React from "react";

function Navbar() {
    return (
        <div class="dropdown">
            <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dashboard </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Symptoms</a>
                <a class="dropdown-item" href="#">Check-Ins</a>
                <a class="dropdown-item" href="#">Logout</a>
            </div>
        </div>
    )
}

export default Navbar;