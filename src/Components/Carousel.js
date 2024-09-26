import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewMoreBtn from './ViewMoreBtn';

const Carousel = () => {

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
        
           <div className='products-list'>
           <Slider {...settings}>
                {sellingData.map((eachItem, index) => (
                    <div key={index} className='each-product'>
                        <div className='product-img'>
                            <img src={eachItem.image} alt={eachItem.title}  style={{ width: 'auto' }} />
                        </div>
                    </div>
                ))}
            </Slider>
           </div>

          <div className='btn-bsp'> <ViewMoreBtn/></div>

        </div>
    );
};

export default Carousel;
