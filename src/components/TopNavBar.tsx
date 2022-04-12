import React from 'react';
import { useLocation } from 'react-router-dom';
import { Tab } from './Tab';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const tab = [
  { id: 1, text: 'Overview', path: '/overview' },
  { id: 2, text: 'Energy system', path: '/energy' },
  { id: 3, text: 'P2X', path: '/p2x' },
  { id: 4, text: 'P2X-Balancing', path: '/balancing/p2x' },
  { id: 5, text: 'P2X-Conversion', path: '/conversion/p2x' },
  { id: 6, text: 'P2G-Conversion', path: '/conversion/p2g' },
  { id: 7, text: 'Summary', path: '/summary' },
];

export const TopNavBar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-screen border-b-2 sticky top-0 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 py-4 w-full text-xl font-semibold">
        Green analytics
      </div>
      {!pathname.startsWith('/info') && (
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          freeMode={true}
          className="border-t-2 px-4 pt-6"
        >
          {tab.map((e) => (
            <SwiperSlide className="w-auto">
              <Tab
                className=""
                text={e.text}
                to={e.path}
                selected={pathname === e.path}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
