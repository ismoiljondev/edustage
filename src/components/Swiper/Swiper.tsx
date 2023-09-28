import { ReactNode} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation, Keyboard } from "swiper/modules";
interface SwiperProps {
  children: ReactNode;
  type: 2 | 3 | 4;
}

const SwiperCard:React.FC<SwiperProps> = (props: SwiperProps) => {
  const { children, type } = props;
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        style={type == 2 ? { padding: "1rem" } : {}}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: type == 2 ? 1 : 2,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: type,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Autoplay, Keyboard]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}

export default SwiperCard;