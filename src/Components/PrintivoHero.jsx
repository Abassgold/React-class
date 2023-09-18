import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { BsSearch } from 'react-icons/bs'

import styles from "../Components/PrintivoHero.module.css";

function PrintivoHero() {
  return (
    <>
    <div className={styles.body}>
    <section className='container'>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <img src="src/Images/Printivo logo.svg" alt="" />
          </div>
          <div className=' d-flex justify-content-between align-items-center'>
            <a href="" className={styles.a}>All Product</a>
            <a href="" className={styles.a}>Become a Reseller</a>
            <a href="" className={styles.a}>Merch Store</a>
            <a href="" className={styles.a}>Market Place</a>
          </div>
          <div className="d-flex align-items-center">
            <a href="" className={styles.a} style={{color: 'rgb(217,134,135)', display: 'block', marginRight:'10px'}}>Sign In</a>
            <a href="" className={styles.a} style={{margin: '0 2rem 0'}}>Create Account</a>
            <FiShoppingCart />
          </div>
        </div>

        {/* quality print starts */}
        <div>
          <h1 className={styles.h1}>Quality Prints</h1>
          <h2 className={styles.h6}>Shipped to your doorstep</h2>
          <small>What would you like to print today?</small>
          <form action="">
            <div className={styles.form}>
              <input type="text" className='w-100 border-0' placeholder='Search for Businesscards, T-shirt, Mugs, etc'/>
              <BsSearch />
            </div>
          </form>
        </div>
        {/* quality print ends */}
    </section>
    </div>
  
    </>
  )
}

export default PrintivoHero