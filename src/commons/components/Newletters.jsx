import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Newletters() {
    const settings = {
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
        <>
            <div className="wrap-why-choose">
                <div className="container">
                    <div className="title-main">
                        Dịch vụ <span>An Phát</span>
                        <p>Xây Dựng - Cơ Khí An Phát cung cấp các Dịch Vụ Chất lượng nhất tới Khách hàng</p>
                    </div>
                    <Slider {...settings}>
                        <div className="item-choose">
                            <div className="item-choose__img">
                                <i className="fas fa-certificate"></i>
                            </div>
                            <h3>Chuyên Nghiệp, Đáng Tin Cậy  Nhất Khu Vực TPHCM</h3>
                        </div>
                        <div className="item-choose">
                            <div className="item-choose__img">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Đội Ngũ Nhân Viên Có Trình Độ Chuyên Môn Cao.</h3>
                        </div>
                        <div className="item-choose">
                            <div className="item-choose__img">
                                <i className="fas fa-tags"></i>
                            </div>
                            <h3>Tối Ưu Về Chi Phí Và Chất Lượng Của Các Công Trình</h3>
                        </div>
                        
                    </Slider>                    
                    <div className="form-dk">
                        <form className="form-newsletter" method="post" >
                            <div className="newsletter-input">
                                <input type="email" className="form-control" id="ten-newsletter" name="ten-newsletter" placeholder="Họ tên(*)" required=""/>
                                <div className="invalid-feedback">Vui lòng nhập họ và tên</div>
                            </div>
                            <div className="newsletter-input">
                                <input type="email" className="form-control" id="email-newsletter" name="email-newsletter" placeholder="Email(*)" required=""/>
                                <div className="invalid-feedback">Vui lòng nhập địa chỉ email</div>
                            </div>
                            <div className="newsletter-button">
                                <input type="submit" name="submit-newsletter" value="Đăng ký"/>
                            </div>
                            <div className="contact-now">
                                <p>Liên hệ ngay</p>
                                <a href="tel:0938477707">0938 477 707</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
