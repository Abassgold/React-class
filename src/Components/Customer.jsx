import React from 'react'
import styles from '../Components/Customer.module.css'

const Customer = () => {
    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <h2>
                        What Customers Say About Us🙌
                    </h2>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12 mb-3">
                            <div className="border border-1 bg-light rounded-1">
                            <div className="py-3 px-3">
                                <div className="d-flex justify-content-between">
                                    <div className=' me-4'>
                                        <div className={styles.span}>
                                            <img src="src/Images/twitter icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Amina Ebele <a href="">@DeliciousAmina</a></p><br />
                                        <p>I am now the unofficial <a href="">@Printivo</a>  ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 mb-3">
                            <div className=' border border-1 bg-light rounded-1'>
                            <div className="py-3 px-3">
                                <div className="d-flex justify-content-between">
                                    <div className=' me-4'>
                                        <div className={styles.span}>
                                            <img src="src/Images/twitter icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Oluwatosin  <a href="">@olgablark</a></p><br />
                                        <p>These guys <a href="">@Printivo</a>  are really awesome and affordable. Excellent customer service and delivery too. Thank you.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 mb-3">
                            <div className='border border-1 bg-light rounded-1'>
                            <div className="py-3 px-3">
                                <div className="d-flex justify-content-between">
                                    <div className=' me-4'>
                                        <div className={styles.span}>
                                            <img src="src/Images/twitter icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Oluwatosin <a href="">@tosingirlfx</a></p><br />
                                        <p><a href="">@Printivo</a> delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Customer