import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import sliderApi from "../apis/sliderApi";
import socialApi from "../apis/socialApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderSlick() {
    const settings = {
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [listSlider, setListSlider] = useState([]);

    useEffect(() => {
        fetchSlider();
    }, []);

    const fetchSlider = async () => {
        const listSlider = await sliderApi.getSlider();
        setListSlider(listSlider);
    };

    const [socialList, setSocialList] = useState([]);

    useEffect(() => {
        fetchSocial();
    }, []);

    const fetchSocial = async () => {
        const socialList = await socialApi.getSocial();
        setSocialList(socialList);
        console.log(socialList);
    };

    return (
        <div>
            <div className="slideshow">
                <div className="slideshow__left">
                    <ul>
                        {socialList.map((social, index) => (
                            <li key={index}>
                                <a href={social?.link} title={social?.ten}>
                                    <img src={`./images/${social?.img}`} alt={social?.ten} title={social?.ten} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="main-slider">
                    <Slider {...settings}>
                        {listSlider.map((slider, index)=>(
                            <div key={index}>
                                <a href={slider.link} target="_blank" title={slider.ten}>
                                    <div className="img">
                                        <img src={`./images/${slider.img}`} alt={slider.ten} title={slider.ten}/>
                                    </div>
                                    <div className="info">
                                        <div>
                                            <h3>{slider.ten}</h3>
                                            <div className="desc">
                                            {slider.mota}
                                            </div>
                                            <div className="_xct">Xem chi tiết</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>

        </div >
    )
}
