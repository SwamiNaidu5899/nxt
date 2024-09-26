import React from 'react'
import ViewMoreBtn from './ViewMoreBtn'

const BestShops = () => {

    let shops = [
      {
        id : 1
      },
      {
        id : 1
      },
      {
        id : 1
      },
      {
        id : 1
      },
      {
        id : 1
      }
    ]

  return (
    <div className='best-shops-main'>
    
    <div className='header-best-shops'>
    <div>
        <h1>Best Shops</h1>
      </div>
      <div>
        <p>Our Highest Rated Shops Where You Can Find What You Are Looking For</p>
      </div>
    </div>

        <div className='cards-sec'>
        {
          shops.map((x)=>{
            return(
              <div className='each-card'>

              <div className='banner-img-bs'>
          
                <img src='https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1720359615%2Flovepik-taobao-tmall-e-commerce-banner-background-image_500699718_zslnfm.jpg&w=256&q=5' alt=''/>
          
              </div> <hr/>
          
              <div className='best-shops-btns'>
          
                <div className='overlap-img'>
                  <img src='https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1720359672%2Flogo_xve8m1.png&w=1080&q=5' alt=''/>
                </div>
          
               <div className='btn-main-div'>
               <div>
                  <h6 style={{textAlign:'center'}}>Busy Mart</h6>
                </div>
          
                 <div className='btn-vs-f'>
                 <button className='btn-vs'>View Store</button>
                 <button className='btn-f'>Follow</button>
                 </div>
               </div>
          
                </div><hr/>
          
              <div className='foloowers-data'>
          
              <div className='card-data'>
                <div>
                  <h6>Followers</h6>
                  <p>4</p>
                </div>
                <div>
                <h6>Total Products</h6>
                <p>9</p>
                </div>
              </div>
          
              </div>
          
              </div>
            )
          })
        }
        </div>

        <div className='btn-bsp'> <ViewMoreBtn/></div>


    </div>
  )
}

export default BestShops