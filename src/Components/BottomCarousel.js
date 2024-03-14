import React from "react";
import Slider from "react-slick";
import team_img from "../Assets/team.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Stylesheets/Bottom.module.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (

      <div className={styles.container}>
        
        <div className={styles.carouselContainer}>
        <div className={styles.toptext}>Our Happy Family</div>
          <Slider {...settings}>
            <div>
              <img
                className={styles.carouselImage}
                src={team_img}
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                className={styles.carouselImage}
                src="https://placekitten.com/800/401"
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                className={styles.carouselImage}
                src="https://placekitten.com/800/402"
                alt="Slide 3"
              />
            </div>
          </Slider>
        </div>
        
      </div>
  );
};

export default Carousel;
