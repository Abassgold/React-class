import React from 'react'
import styles from '../Components/PrintivoHead.module.css'

function PrintivoHead() {
  return (
    <div>
      <div className={styles.parentHeader}>
        <header className={styles.flex}>
          <div>
            <a href="" className='me-4 text-decoration-none text-muted fw-bold'>Cost Calculator</a>
            <a href="" className='me-4 text-decoration-none text-muted fw-bold'>Discover Stores</a>
            <a href="" className=' text-decoration-none text-muted fw-bold'>Track Orders</a>
          </div>

          <div style={{display: "flex", alignItems:'center'}}>
            <span style={{fontWeight: 500, fontSize: '13px',}}>Need help? Call: <a href="" style={{textDecoration: 'none'}}>+2348103875405</a></span>
            <a href="" className=' mx-5'>
              <img src="src/Images/whatsapp.svg" alt="" />
            </a>
            <a href="" style={{textDecoration: 'none', padding: '5px', border: 'solid 0.1px #d2d1cf', borderRadius: '15px'}}>
              <img src="src/Images/nigerian flag.svg" alt="" />
              <span className='ms-1 text-dark'>Niegria</span>
            </a>
          </div>
        </header>
      </div>

    </div>
  )
}

export default PrintivoHead