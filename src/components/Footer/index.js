import React from "react";
import "./style.css";

function Footer() {

return (
    <footer className="text-center fixed-bottom footer-color footer-height-test">
        <div className="card-footer">
            <a className="icon-spacer" target="_blank" href="https://github.com/btparker70"><i class="fab fa-github fa-2x" style={{color: "white"}}></i></a>
            <a className="icon-spacer" target="_blank" href="https://www.linkedin.com/in/brian-parker-79871819b/"><i class="fab fa-linkedin-in fa-2x" style={{backgroundColor: "#2867B2", color: "white"}}></i></a>
            <a className="icon-spacer" target="_blank" href="assets/pdf/TechResumeBrianParker2020.pdf" download><i class="far fa-file-pdf fa-2x" style={{backgroundColor: "#313841", color: "white"}}></i></a>
        </div>
    </footer>
)
}


export default Footer;