import React from 'react'

const Footer = () => {
    return (
        <div className='footer-main'>

            <div className='footer-body'>

                <div className='footer-col-1'>
                    <div>
                        <img src='https://goodbois.de/cdn/shop/files/GOODBOIS_CLASSIC_LOGO_2018_PNG.png?v=1613767613' height={100} alt='' />
                    </div>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div className='footer-icon-div'>
                        <div>
                            <i class="bi bi-geo-alt-fill i-l1"></i>
                            <p>Ohio St. South Gate, CA 90280
                            </p>
                        </div>
                        <div>
                            <i class="bi bi-envelope i-l2"></i>
                            <p>johndoe@yahoo.com</p>
                        </div>
                        <div>
                            <i class="bi bi-telephone i-l3"></i>
                            <p>
                                +1 386-688-3295</p>
                        </div>
                    </div>

                </div>

                <div className='footer-col-2'>
                    <div>
                        <h3>Resources</h3>
                    </div>
                    <div>
                        <p>Contact Us</p>
                        <p>Products</p>
                        <p>Shops</p>
                        <p>Campaigns</p>
                    </div>
                </div>

                <div className='footer-col-3'>

                    <div>
                        <h3>About Us</h3>
                    </div>
                    <div>
                        <p>About us</p>
                        <p>Privacy policy</p>
                        <p>Terms and conditions</p>
                        <p>Refund return policy</p>
                    </div>

                </div>
                <div className='footer-col-4'>
                    <div>
                        <h3>Join a Newsletter</h3>
                    </div>
                    <div className='inp-field'>
                        <input type='text' placeholder='Enter you Email' />
                        <button>Subscribe</button>
                    </div>
                    <div className='footer-icons'>
                        <div><i className='bi bi-facebook'></i></div>
                        <div><i className='bi bi-instagram'></i></div>
                        <div><i className='bi bi-linkedin'></i></div>
                    </div>

                </div>
            </div>

            <hr />

            <div className='footer-copyright' style={{ textAlign: 'center' }}>
                <span>&copy;The-22. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer