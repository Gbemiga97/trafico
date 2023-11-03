import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'


const Slider = ({clients}) => {
  return (
    <Swiper slidesPerView={3}
    spaceBetween={20}
    slidesOffsetBefore={60}
    grabCursor={true}
    className='w-[1300px] h-[440px]'
    >
      {
        clients.map(({name, image, message}, i) => (
          <SwiperSlide key={i}>
            <div className='bg-white h-[360px] drop-shadow-primary rounded-[10px] px-[50px]
            pt-[60px] pb-[40px] flex flex-col justify-between'>
              <p className='font-light leading-[30px]'>
                {message}</p>
              <div className='flex items-center gap-x-5'>
                <img 
                className='w-[60px] h-[60px]'
                src={image}
                 alt={name} />
                 <h5 className='font-semibold'>
                  {name}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
};

export default Slider;
