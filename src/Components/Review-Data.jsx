import React from 'react'

const ReviewData = () => {
  return (
    <div className='review-data'>
        <div className='patch-icon'>
        <i class="bi bi-patch-check"></i>
        </div>
        <div className='patch-data'>
            <span5>5/5</span5>
            <div className='stars'>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            </div>
            <span>5 Reviews</span>
        </div>
    </div>
  )
}

export default ReviewData