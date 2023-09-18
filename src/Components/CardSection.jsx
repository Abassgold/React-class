import React from 'react'
import card from '../Components/CardSection.module.css'
import Nig from './Nig'

function CardSection() {
    return (
        <>
            <section className={card.body}>
                <div className=' container'>
                    <div className={card.body1}>
                        <h1>Popular Product</h1>
                        <h4>See All Product</h4>
                    </div>
                    {/* card start */}
                    <section className='row mb-3'>
                        <div className=" col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                                <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>Two-sided Business Cards</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦9,700 <small className=' text-muted'>per 100</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse Two-sided Bu..</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                            <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>A5 flyers (Single Sided)</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦16,500 <small className=' text-muted'>per 100</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse A5 flyer (S..</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                                <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>Round Stickers (3.5" Diameter)</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦10,900 <small className=' text-muted'>per 100</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse Round Sticke...</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                            <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>Simple Mugs</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦3,000 <small className='text-muted'>per 1</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse Simple Mugs</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                            <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>Poster Card (6)</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦14,200 <small className=' text-muted'>per 50</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse Postcards(A.. ></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                            <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>Roll Up Banners (Big Base)</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦35,200 <small className=' text-muted'>per 1</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Roll Up Banners (Big Base)</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                            <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>A2 Poster</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦45,500 <small className=' text-muted'>per 100</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse A2 Posters</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                            <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>Trifold Brochures</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦30,400<small className=' text-muted'>per 100</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse Trifold Broc</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                            <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>Landscape ID Cards</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦2,000 <small className=' text-muted'>per 1</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse Landscape ID</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                            <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>Off white T-shirts</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦3,800 <small className=' text-muted'>per 100</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse Off White T</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                            <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>A4 Branded Paper Bags</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦67,000 <small className=' text-muted'>per 100</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse A4 Branded P...</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                            <div className={card.bac1}></div>
                                {/* <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" /> */}
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>A4 Courier Bags</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦17,600 <small className=' text-muted'>per 100</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse A4 Courier B...</a>
                                </div>
                            </div>
                        </div>

                    </section>
                    {/* card ends */}

                    <div className={card.body1}>
                        <h1>Popular Categories</h1>
                        <h4>See All Categories</h4>
                    </div>
                    <section className="row mb-3">
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                                <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" />
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>A5 flyers (Single Sided)</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦16,500 <small className=' text-muted'>per 100</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse A5 flyer S..</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4" style={{ height: '25rem', }}>
                            <div className="card h-100">
                                <img src="src/Images/Two-sided Business Cards.png" className="card-img-top img-fluid h-50" alt="" />
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontSize: '19px' }}>Round Stickers (3.5" Diameter)</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '15px', fontWeight: '600' }}>STARTING AT</p>
                                    <p className="card-text" style={{ fontSize: '20px', fontWeight: '700' }}>₦10,900 <small className=' text-muted'>per 100</small></p>
                                    <a href="#" className="btn" style={{ background: '#d77f81', fontWeight: '500', color: 'white' }}>Browse Stickers </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Nig />

                </div>
            </section>

        </>

    )
}

export default CardSection