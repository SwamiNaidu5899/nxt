import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewMoreBtn from './ViewMoreBtn';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px",zIndex: 1, background : ' rgb(238, 30, 80)', borderRadius : '50%' }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: 1, background : ' rgb(238, 30, 80)', borderRadius : '50%' }}
            onClick={onClick}
        />
    );
};

const BestSellingProducts = () => {

    var settings = {
        dots: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true, 
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />, 
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    const sellingData = [
        {
            image: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721105274%2Flouis-vuitton--BP9U6PGC26_PM2_Front_view_dtxifa.avif&w=640&q=75',
            title: 'LV Trainer Sneakers',
            rating: '5.0',
            price: '$247',
            discount: '-1%'
        },
        {
            image: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721207000%2FBLL4515750-YEL_2_bpt1rq.webp&w=384&q=75',
            title: 'Nba Los Angles',
            rating: '0',
            price: '$58',
            discount: '-3%'
        },
        {
            image: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721106056%2Fair-jordan-4-red-metallic-release-date_oq3c0n.webp&w=384&q=75',
            title: 'Nike Air Jordan',
            rating: '0',
            price: '$257',
            discount: '-1%'
        },
        {
            image: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1720373848%2Flg_Do0unp0pziV9Nm5uhATiDNU8mmkk4KiYap65pVl2_fmlslu_qroum7_1_usffpf.webp&w=384&q=75',
            title: 'Guchhi White',
            rating: '0',
            price: '$98',
            discount: '-18%'
        },
        {
            image: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721102694%2Fmitchell-ness-nba-los-angeles-lakers-team-og-20-premium-vintage-logo-short-sleeve-basketball-t-shirt-for-men-black_kp8g4z.jpg&w=384&q=75',
            title: 'Sleeve Bask',
            rating: '0',
            price: '$68',
            discount: '-3%'
        },
        {
            image: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721059514%2FxJoX84ssC1xdC0VNqLtr06kDJwiGNFUm_v0dur9.jpg&w=384&q=75',
            title: 'Puma Unisex Cap',
            rating: '0',
            price: '$19',
            discount: '-14%'
        },
        {
            image: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721060945%2F196313860964_default_0010_qj5akc.avif&w=384&q=75',
            title: 'Los Angles Cap',
            rating: '0',
            price: '$22',
            discount: '-8%'
        },
        {
            image: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721206275%2FHN8058___1_jpg_png_jpg_bdaebef5-28c3-41f2-b6ec-0298b3b28f0c_edu5ui.webp&w=384&q=75',
            title: 'Men Trio 21',
            rating: '0',
            price: '$48',
            discount: '-4%'
        }
    ];

    return (
        <div className='selling-products-main'>
           
           <div className='products-header'>
           <h1>Best Selling Products</h1>
           <p>Special Products in this month</p>
           </div>

           <div className='products-list'>
           <Slider {...settings}>
                {sellingData.map((eachItem, index) => (
                    <div key={index} className='each-product'>
                        <div className='product-img'>
                            <img src={eachItem.image} alt={eachItem.title} height={100} style={{ width: 'auto' }} />
                        </div>
                        <div className='product-data'>
                            <h6>{eachItem.title}</h6>
                            <span>{eachItem.rating}</span><br/>
                            <span>{eachItem.price} <i style={{fontSize : '12px', color: 'red'}}>({eachItem.discount})</i></span>
                           
                        </div>
                    </div>
                ))}
            </Slider>
           </div>

          <div className='btn-bsp'> <ViewMoreBtn/></div>

        </div>
    );
};

export default BestSellingProducts;
