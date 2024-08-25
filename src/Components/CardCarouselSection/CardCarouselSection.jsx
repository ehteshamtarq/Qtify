import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '../Card/Card';
import leftBtn from "../../assets/LeftArrow.svg"
import rightBtn from "../../assets/RightArrow.svg"
import { useSwiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from "react";
import './CardCarouselSection.css';

import { Pagination, Navigation } from 'swiper/modules';

// const CardCarouselSection = ({ name, songsData }) => {
//   return (
//     <div className="swiper">
//       <Swiper
//         slidesPerView={10}
//         spaceBetween={50}
//         navigation={{
//           nextEl: `#${name.split(' ').join('')}-right`,
//           prevEl: `#${name.split(' ').join('')}-left`,
//         }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {songsData.map((song) => (
//           <SwiperSlide key={song.id}>
//             <div style={{ marginRight: '10px', marginLeft: '10px' }}>
//               <Card
//                 image={song.image} // Image source for the card
//                 text={ // Text content for the card
//                   song.follows !== undefined
//                     ? `${song.follows} Follows`
//                     : `${song.likes} Likes`
//                 }
//                 title={song.title} // Title of the song
//                 tooltipText={song.songs?.length} // Tooltip text
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <button
//         className="left-btn slider-btn"
//         id={`${name.split(' ').join('')}-left`}
//       >
//         <img src={leftBtn} alt="Left Button" />
//       </button>
//       <button
//         className="right-btn slider-btn"
//         id={`${name.split(' ').join('')}-right`}
//       >
//         <img src={rightBtn} alt="Right Button" />
//       </button>
//     </div>
//   );
// };

const Controls = ({ data }) => {
	const { swiper } = useSwiper();

	useEffect(() => {
		swiper?.slideTo(0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return <></>;
};
const CardCarouselSection = ({ name, songsData }) => {
  return (
    <div className="swiper">
      <Swiper
				initialSlide={0}
				modules={{ Navigation }}
				slidesPerView={7}
				spaceBetween={10}
				allowTouchMove>
				<Controls data={songsData} />
				<CarouselLeftNavigation />
				<CarouselRightNavigation />
				{songsData?.map((song) => (
					<SwiperSlide key={song.id}><div style={{ marginRight: '10px', marginLeft: '10px' }}>
          <Card
            image={song.image} // Image source for the card
            text={ // Text content for the card
              song.follows !== undefined
                ? `${song.follows} Follows`
                : `${song.likes} Likes`
            }
            title={song.title} // Title of the song
            tooltipText={song.songs?.length} // Tooltip text
          />
        </div></SwiperSlide>
				))}
			</Swiper>
     
    </div>
  );
};

export default CardCarouselSection;
