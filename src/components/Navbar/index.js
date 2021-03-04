import React from "react";
import "./style.css";

function Navbar(props) {
return (
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#Bio" onClick={() => props.handlePageChange("bio")}>Brian Parker</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link" href="#bio" onClick={() => props.handlePageChange("bio")}>About Me</a>
            <a class="nav-link" href="#portfolio" onClick={() => props.handlePageChange("portfolio")}>Portfolio</a>
            <a class="nav-link" href="#contact" onClick={() => props.handlePageChange("contact")}>Contact <span class="sr-only">(current)</span></a>
        </div>
    </div>
</nav>
</div>
)
}

export default Navbar;