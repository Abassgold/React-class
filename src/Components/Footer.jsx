import React from 'react'
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import footer from '../Components/Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={footer.footer}>
                <div className="container">
                    <div className="row justify-content-beetween">
                        <div className="col-lg-3 col-md-6 col-12 mb-3">
                            <div>
                                <h5>Printivo</h5>
                                <a href="">About Us</a><br />
                                <a href="">Contact</a><br />
                                <a href="">Track Order</a><br />
                                <a href="">Printivo Promise</a><br />
                                <a href="">Printivo Blog</a><br />
                                <a href="">Career</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-3">
                            <div>
                                <h5>Help and Information</h5>
                                <a href="">Paper Quality</a><br />
                                <a href="">Privacy Policy</a><br />
                                <a href="">Terms and Conditions</a><br />
                                <a href="">Font Licenses</a><br />
                                <a href="">Shipping and Delivery</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-3">
                            <div>
                                <h5>Make Money</h5>
                                <a href="">Refer a friend & earn N1,000</a><br />
                                <a href="">Become a Reseller</a><br />
                                <a href="">Sell your Designs</a><br />
                                <a href="">Merch Store</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-3">
                            <div>
                                <h5>Follow Us</h5>
                                <a href="">
                                    <a href="" className={footer.anchor}><FiFacebook /></a>
                                    <a href="" className={footer.anchor}><FiTwitter /></a>
                                    <a href="" className={footer.anchor}><FiLinkedin /></a>
                                    <a href="" className={footer.anchor}><FiInstagram /></a>
                                </a>
                                <h5>Accepted Payments</h5>
                                <div className='mb-3'>
                                    <img src="src/Images/payment.png" alt="" className='img-fluid' style={{maxWidth: '11rem'}}/>
                                </div>
                                <h5 className='mb-3'>Delivery</h5>
                                <div>
                                    <img src="src/Images/shipping.png" alt="" className='img-fluid' style={{maxWidth: '11rem'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={footer.last}>
                <p>Copyright © 2023 Printivo. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer