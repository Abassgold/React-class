import React from 'react'
import styles from "../Components/Nig.module.css"

const Nig = () => {
    return (
        <>
            <div>
                <h1 className={styles.first}>Nigeria’s No. 1 online print shop🎁</h1>
                <h5 className={styles.h6}>Our print services and solutions are trusted by these brands and <br /> over 15,000 other businesses in Nigeria.</h5>
                <div className='my-5'>
                    <img src="src/Images/group.png" alt="" className=' img-fluid' />
                </div>
            </div>
        </>
    )
}

export default Nig