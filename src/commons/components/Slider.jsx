import React, { useState, useEffect } from 'react';
// import Slider from "react-slick";
// import sliderApi from "../apis/sliderApi";
import socialApi from "../apis/socialApi";


export default function SliderSlick() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    // const [slider, setSlider] = useState({});

    // useEffect(() => {
    //     fetchSlider();
    // }, []);

    // const fetchSlider = async () => {
    //     const slider = await sliderApi.getAll();
    //     setSlider(slider);
    // };

    const [socialList, setSocialList] = useState([]);

    useEffect(() => {
        fetchSocial();
    }, []);

    const fetchSocial = async () => {
        const socialList = await socialApi.getSlider();
        setSocialList(socialList);
        console.log(socialList);
    };

    return (
        <div>
            <div className="slideshow">
                <div className="slideshow__left">
                    <ul>
                        {socialList.map((social, index) => (
                            <li key={social?.ten}>
                                <a href={social?.link} title={social?.ten}>
                                    <img src={`/images/${social?.img}`} alt={social?.ten} title={social?.ten} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div className="main-slider">
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>

                </div> */}
            </div>

        </div >
    )
}
