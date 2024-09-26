import React from 'react'
import ViewMoreBtn from './ViewMoreBtn'

const Categories = () => {

    let data = [
        {
        image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721032291%2Ff96f71d05e4b0e826aa4d03dd396df99_mmuxvr.jpg&w=750&q=5',
        title : 'Eyewares'
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721031925%2F035b600c93b37df75e8b1d409ee51a25_dyb2x1_anem9z_i9yb8b.webp&w=384&q=5',
            title : 'Shirts'
            },
            {
                image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721031859%2F6514ed14b66fe0035a30234c-zkccnuk-cargo-pants-for-men-solid-casual_aplpso.jpg&w=750&q=5',
                title : 'Pants'
                },
                {
                    image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721031355%2FGrey-Hyper-Bolt-Running-Shoes-for-Men-2_g7j9zh.jpg&w=750&q=5',
                    title : 'Shoes'
                    },
                    {
                        image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721031231%2F23_A_Caps_FAC23-035_1_lws8ar.webp&w=750&q=5',
                        title : 'Caps'
                        },
                        {
                            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721031156%2Fsamsung_galaxy_a52_kuwait_blue_1_jnjg4q_sbppbn_ro9nd0.jpg&w=750&q=5',
                            title : 'Mobile'
                            }
]

  return (
    <div className='category-main'>
        <div>
            <h1>Top Categories</h1>
        </div>
        <div>
            <p>lorem jksjdkjsahdkjdskb kjahdkhdlka khaf alahad</p>
        </div>

        <div>
            <div className='categories'>
              {
                data.map((eachObject) => {
                    return(
                        <div className='each-category'>
                        <img src={eachObject.image} height={100} alt={eachObject.title} />
                        <h6>{eachObject.title}</h6>
                        </div>
                    )
                })
              }
            </div>
            <div>

                

            </div>
        </div>
        <div className='btn-bsp btn-cat'> <ViewMoreBtn/></div>

    </div>
  )
}

export default Categories