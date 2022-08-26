import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import tieuChiApi from "../../commons/apis/tieuChiApi";
import Parser from 'html-react-parser';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TieuChi() {
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
    const [listTieuChi, setListTieuChi] = useState([]);

    useEffect(() => {
        fetchTieuChi();
    }, []);

    const fetchTieuChi = async () => {
        const listTieuChi = await tieuChiApi.getTieuChi();
        setListTieuChi(listTieuChi);
    };
    return (
        <> 
            <div className="counters">
                <div className="container">
                    <div className="box-tieuchi">
                        <div className="tit-tieuchi">
                            <div>
                                <h3>Tiêu chí<br/><span>Chọn chúng tôi</span></h3>
                                <p>Công Ty An Phát đem tới các Sản phẩm, Dịch vụ tốt nhất tới Khách Hàng...</p>
                            </div>
                        </div>
                        <div className="box-counter">
                            <Slider {...settings}>
                                {listTieuChi.map((tieuchi, index)=>(
                                    <div className="item-tieuchi" key={index}>
                                        <div className="box-count">
                                            <span className="counter">{tieuchi?.number}</span>
                                            <span>+</span>
                                        </div>
                                        <h3>{Parser(tieuchi?.ten)}</h3>
                                    </div>
                                ))}
                            </Slider>                                
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}
