import React from 'react'
import ReviewData from './Review-Data'

const Review = () => {
  return (
    <div className='review'>

<div className='review-col-1'>
        <div className='rev-heading'>
          <h2>Let's explore customer <br/> sentiments  towards our <br/> offerings.</h2>
          <p className='review-about'>Discover what customers are saying about our products.
             Dive into the feedback on the quality and performance
              of our offerings. Gain insights into how our customers
              perceive our products and their overall satisfaction.
              Your options matter, and we're here to listen.  </p>
        </div>
        <div className='review-arrow'>
        <div><i class="bi bi-arrow-left-short"></i></div>
        <div><i class="bi bi-arrow-right-short"></i></div>
        </div>
        <div>

        </div>
        </div>

        <div className='review-col-2'>

          <div className='review-div'>

            <div className='stars'>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            </div>
            <div  style={{marginTop : '2vh'}}>
              <p>Exeptional shopping experience ! The user friendly
                 interface and seamless navigation make finding and purchasing 
                 products like a breeze. As a Marketing Manager, I 
                 appreciate the...  </p>
            </div>

            <div className='review-img'>
              < img src='https://www.telugu360.com/wp-content/uploads/2015/11/Balakrishna.jpg' height={100} alt=''/>
            </div>

            <div>
              <p style={{marginTop : '2vh'}}>Jai Balayya</p>
              <p style={{marginTop : '-2vh'}}>Fullstack Developer</p>
            </div>

          </div>
         

        </div>
    </div>
  )
}

export default Review