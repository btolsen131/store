import React from "react"
import { BsLinkedin, BsGithub, BsReverseLayoutTextWindowReverse } from "react-icons/bs";

const Footer = () => {
const footerStyle ={
  color:'white',
  backgroundColor:"rgb(111,145,150,80%)",
};
const linkStyle={
  color:'white',
  textDecoration:'none'
}

return (

<footer style={ footerStyle } className="fixed-bottom page-footer font-small pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Brian's Shop</h5>
                <p>Where you can buy everything to be Brian.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">About Us</h5>
                <ul className="list-unstyled">
                    <li><a style={linkStyle} href="/about">About</a></li>
                    <li><a style={linkStyle} href="#!">Misson</a></li>
                    <li><a style={linkStyle} href="https://btolsen131.github.io/portfolio_website/assets/other_htmls/resumePage.html">Hire me</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Social</h5>
                <ul className="list-unstyled">
                    <li><a style={linkStyle} href="https://www.linkedin.com/in/briantolsen/"><BsLinkedin style={{marginRight:'2px'}} /> LinkedIn</a></li>
                    <li><a style={linkStyle} href="https://github.com/btolsen131"><BsGithub style={{marginRight:'2px'}} /> Github</a></li>
                    <li><a style={linkStyle} href="https://btolsen131.github.io/portfolio_website/"><BsReverseLayoutTextWindowReverse style={{marginRight:'2px'}} /> Portfolio</a></li>
                </ul>
            </div>

        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright
    </div>

</footer>
)}

export default Footer