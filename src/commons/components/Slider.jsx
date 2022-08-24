import React from 'react';
import Slider from "react-slick";
import sliderApi from "../apis/sliderApi";
import sliderApi from "../apis/sliderApi";


export default function SliderSlick() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [slider, setSlider] = useState({});

    useEffect(() => {
        fetchSlider();
    }, []);

    const fetchSlider = async () => {
        const params = {
            _limit: 10,
        };
        const slider = await sliderApi.getAll();
        setSlider(slider);
    };

    const [slider, setSlider] = useState({});

    useEffect(() => {
        fetchSlider();
    }, []);

    const fetchSlider = async () => {
        const params = {
            _limit: 10,
        };
        const slider = await sliderApi.getAll();
        setSlider(slider);
    };

    return (
        <div>
            <div class="slideshow">
                <div class="slideshow__left">
                    <ul>
                        <?php foreach($mangxahoi as $v) { ?>
                            <li>
                                <a href="<?=$v['link']?>" target="_blank" title="<?=$v['ten'.$lang]?>">
                                    <img onerror="this.src='<?=THUMBS?>/15x15x2/assets/images/noimage.png';" src="<?=THUMBS?>/15x15x2/<?=UPLOAD_PHOTO_L.$v['photo']?>" alt="<?=$v['ten'.$lang]?>" title="<?=$v['ten'.$lang]?>"/>
                                </a>
                            </li>
                        <? php } ?>
                    </ul>
                </div>
                <div class="main-slider">
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

                    <div class="owl-carousel owl-theme owl-slideshow">
                        <?php foreach($slider as $v) { ?>
                            <div>
                                <a href="<?=$v['link']?>" target="_blank" title="<?=$v['ten'.$lang]?>">
                                    <div class="img">
                                        <img onerror="this.src='<?=THUMBS?>/1366x600x2/assets/images/noimage.png';" src="<?=UPLOAD_PHOTO_L.$v['photo']?>" alt="<?=$v['ten'.$lang]?>" title="<?=$v['ten'.$lang]?>"/>
                                    </div>
                                    <div class="info">
                                        <div>
                                            <h3 class="wow fadeInUp" data-wow-offset="0" data-wow-duration="1"><?=$v['ten'.$lang]?></h3>
                                            <div class="desc wow fadeInUp" data-wow-offset="0.3" data-wow-duration="1" data-wow-delay="0.2s">
                                                <?=htmlspecialchars_decode($v['mota'.$lang])?>
                                            </div>
                                            <div class="_xct"><?=xemchitiet?></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        <? php } ?>
                    </div>
                </div>
            </div>

        </div>
    )
}
