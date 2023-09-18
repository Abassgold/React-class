import React from 'react'
import styles from '../Components/Amazing.module.css'
const Amazing = () => {
    return (
        <>
            <section style={{ background: '#f7f6f4', padding: '5rem 0' }}>
                <div className='container'>
                    <h1 className={styles.h1}>Our amazing work got noticed by:</h1>
                    <div className="row justify-content-md-between justify-content-start align-items-center">
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
                            <div>
                                <img src="src/Images/techcrunch logo.svg" alt="" className='img-fluid mb-2' /><br />
                                <a href="" className={styles.a}>Read the article here</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
                            <div>
                                <img src="src/Images/forbes logo.svg" alt="" className='img-fluid mb-2' /><br />
                                <a href="" className={styles.a}>Read the article here</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
                            <div>
                                <img src="src/Images/techpoint logo.png" alt="" className='img-fluid mb-2' /><br />
                                <a href="" className={styles.a}>Read the article here</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
                            <div>
                                <img src="src/Images/techcabal logo.svg" alt="" className='img-fluid mb-2' /><br />
                                <a href="" className={styles.a}>Read the article here</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
                            <div>
                                <img src="src/Images/CNN logo.svg" alt="" className='img-fluid mb-2' /><br />
                                <a href="" className={styles.a}>Read the article here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Amazing