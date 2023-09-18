import React from 'react'
import count from '../Components/Count.module.css'

const Count = () => {
  return (
    <>
      <section className='container' style={{padding: '5rem 0rem'}}>
        <h1 className={count.h1}>You can count on us for:</h1>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-12 mb-3">
            <div>
              <div className='d-flex'>
                <div>
                <img src="src/Images/clock.svg" alt="" />
                </div>
                <div>
                  <h6 className={count.h6}>Fast Turnaround Within Days</h6>
                  <p className={count.p}>Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 mb-3">
            <div>
              <div className='d-flex'>
                <div>
                <img src="src/Images/clock (1).svg" alt="" />
                </div>
                <div>
                  <h6 className={count.h6}>100% Top Quality</h6>
                  <p className={count.p}>Only the finest materials, machines and people will be involved in fulfilling your order.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 mb-3">
            <div>
              <div className='d-flex'>
                <div>
                <img src="src/Images/clock (2).svg" alt="" />
                </div>
                <div>
                  <h6 className={count.h6}>Affordable Services</h6>
                  <p className={count.p}>All products are adequately priced to ensure you get value for your money at all times.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Count