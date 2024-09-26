import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewMoreBtn from './ViewMoreBtn';

const Carousel = () => {

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
                        }
]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const sellingData = [
        {
            image: 'https://nextall.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-banner-2.6a8cebfd.png&w=1200&q=75',
        },
        {
            image: 'https://nextall.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-banner.dc50218b.png&w=1200&q=75',
        },
    ];

    return (
        <div className='selling-products-main'>

            <div className='cat-list'>
                <div className='list-items'>
                {
                    data.map((eachCat)=>{
                        return(
                            <div className='eachCat'>
                                <div style={{width:'30%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                    <img src={eachCat.image} height={50} alt=''/>
                                </div>
                                <div style={{width : '60%', display:'flex',alignItems:'center',justifyContent:'start'}}>
                                    <p>{eachCat.title}</p>
                                </div>            
                            </div>
                        )
                    })
                }
                </div>
            </div>

            <div className='products-list'>
                <Slider {...settings}>
                    {sellingData.map((eachItem, index) => (
                        <div key={index} className='each-product'>
                            <div className='product-img-main'>
                                <img src={eachItem.image} alt={eachItem.title} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* <div className='btn-bsp'> <ViewMoreBtn/></div> */}

        </div>
    );
};

export default Carousel;
