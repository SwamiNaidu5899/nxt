import React from 'react'

const Brands = () => {


    const brands = [
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721018564%2FQR-Apple-logo.jpg.square_social_mjt46t_xllbjl_h30nnm.jpg&w=256&q=75',
            title : 'Apple',
            products : ''
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721018601%2F33e63d5adb0da6b303a83901c8e8463a_irv4b3_yp9mfj_amdcdu_x9hk6c.jpg&w=256&q=75',
            title : 'Nike',
            products : ''
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721018673%2Fimages_qlhjvt_yhlux0_j3jhef.png&w=256&q=75',
            title : 'Adidas',
            products : ''
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721018713%2Fhuawei-logo-huawei-icon-free-free-vector_vtlqog_gohvqd_a0yhfz.jpg&w=256&q=75',
            title : 'Huawei',
            products : ''
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721019118%2Flouis-vuitton-logo-design-template-78ffdfd5a7454ac656ed6782e551a9df_screen_bldeoa.jpg&w=256&q=75',
            title : 'LV',
            products : ''
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721019916%2FPrada-Triangle-Logo-Vector-01_fyd059.jpg&w=256&q=75',
            title : 'Prada',
            products : ''
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721019060%2F4130d4b75d90d8ca754391d6eb73dd8c_w9htzz.jpg&w=256&q=75',
            title : 'Balenciaga',
            products : ''
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721020143%2Flakers-logo-lakers-icon-transparent-free-png-fotor-bg-remover-2024071510838_lqmaaa.png&w=256&q=75',
            title : 'Lakers',
            products : ''
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721020630%2Fdior-logo-png-transparent-fotor-bg-remover-20240715101324_waoan7.png&w=256&q=75',
            title : 'Dior',
            products : ''
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721020698%2Fpuma-logo-illustration-free-vector_qhjuk3.jpg&w=256&q=75',
            title : 'Puma',
            products : ''
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721021618%2Fimages_rd7rqc.png&w=256&q=75',
            title : 'Burberry',
            products : ''
        },
        {
            image : 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721022557%2Freebok_logo_icon_248669-fotor-bg-remover-20240715104721_gxq1bx.png&w=256&q=75',
            title : 'Reebok',
            products : ''
        }
    ]

    
  return (
    <div className='brands-main'>
        <h1>Brands</h1>
        <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>

        <div className='brands'>
            {
                brands.map((eachBrand) => {
                    return (
                        <div className='eachBrand'>
                        <div>
                            <img src={eachBrand.image} height={70} alt=''/>
                        </div>
                        <div className='brand-data'>
                            <p>{eachBrand.title} <br/> 0</p>
                            {/* <p>0</p>/ */}
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Brands