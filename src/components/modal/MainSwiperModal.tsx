import { FC } from 'react';
import { ModalAnimation } from './ModalAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

interface MainSwiperModalProps {
  title: string;
  description?: string;
  buttonText?: string;
  open: boolean;
  onClose: () => void;
}

const image = [
  { id: 1, imgPath: 'https://source.unsplash.com/random' },
  { id: 2, imgPath: 'https://source.unsplash.com/random' },
  { id: 3, imgPath: 'https://source.unsplash.com/random' },
  { id: 4, imgPath: 'https://source.unsplash.com/random' },
  { id: 5, imgPath: 'https://source.unsplash.com/random' },
  { id: 6, imgPath: 'https://source.unsplash.com/random' },
];

export const MainSwiperModal: FC<MainSwiperModalProps> = ({
  title,
  description,
  buttonText,
  open,
  onClose,
}) => {
  return (
    <>
      <ModalAnimation
        open={open}
        onClose={onClose}
        title={title}
        className="w-full md:w-2/3 p-6"
        content={
          <Swiper
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {image.map((e) => (
              <SwiperSlide className=" aspect-square pt-3 pb-10">
                <img
                  src={e.imgPath}
                  alt=""
                  className="  w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        }
      />
    </>
  );
};
