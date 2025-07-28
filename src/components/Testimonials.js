import { useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { dataImage, imgToSVG } from "../utilits";

SwiperCore.use([Navigation, Pagination, Autoplay]);



const Testimonials = () => {
  useEffect(() => {
    dataImage();
    imgToSVG();
  }, []);

   <div className="arrow-buttons">
  <div className="custom-prev custom-arrow">
    <span className="arrow-icon">❮</span>
  </div>
  <div className="custom-next custom-arrow">
    <span className="arrow-icon">❯</span>
  </div>
</div>
}

       
  

export default Testimonials;
