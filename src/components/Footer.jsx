import React from 'react'

export default function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="col-md-11 footer-body d-flex flex-wrap justify-content-between">
                <div className="flexItem">
                    <h4>mail us</h4>
                        <li>
                            <p>
                            BlueLineRoadways
                            #8-14 Front of S.P. banglow, 
                            Near Sudhas Garden, Industrial Area,
                            Sirohi, 307001
                            Rajathan
                            </p>
                        </li>
                </div>
                <div className="flexItem">
                    <h4>Contact with us</h4>
                    <ul>
                        <li>Contact: 8374988293</li>
                        <li>WhatsApp: 4676328775</li>
                        <li>Email: info@BlueLineRoadways.in</li>
                    </ul>  
                </div>
                <div className="flexItem">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#">What's About Us?</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">What's About Us?</a></li>
                        <li><a href="#">Our Tours info</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Our Locataion</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="flexItem">
                    <h4>Policy</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Term & Conditions</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                </div>
                <div className="flexItem">
                    <h4>My Account</h4>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Travel History</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright &copy; 2021 BlueLineRoadways. All Rights Reserved</p>
            </div>
        </footer>
        </>
    )
}
