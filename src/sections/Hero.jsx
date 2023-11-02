import {Header} from ".";
import { data } from "../constants";
import { motion } from "framer-motion";
import { variants } from "../constants";
import {CgArrowLongRight} from 'react-icons/cg'


const Hero = () => {
  const {title, boyImg, girlImg, truckImg, btnText} = data.heroData

  return (
    <section className="bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950x] lg:mb-80">
      <motion.div 
      variants={variants.staggerContainer}
      initial="initial"
      animate="animate"
      className="container mx-auto relative min-h-[800px] lg:min-h-[950px]">
        
        <motion.div
        variants={variants.fadeInDown}
        >
          <Header />
        </motion.div>

        <motion.h1
        variants={variants.fadeInDown}
        className="h1 max-w-[740px] text-white pt-[12rem] mb-[60px]">
          {title}</motion.h1>

        <motion.button
        whileHover={{
          scale: 1.05,
        }}
        variants={variants.fadeInDown}
        className="btn">
          {btnText}
          <CgArrowLongRight className="text-[1.8rem]" />
          </motion.button>

        <motion.div 
        variants={variants.girlAnim}
        className="hidden lg:flex absolute bottom-0">
          <img
          src={girlImg}
          className="w-[209px] h-[495px]"
          alt='girl avatar' />
        </motion.div>

        <motion.div 
        variants={variants.heroTruckAnim}
        className="hidden lg:flex absolute -bottom-[25%] -left-[30%]">
          <img
          src={truckImg}
         className="w-[811px] h-[395px]"
          alt="truck avatar"
          />
        </motion.div>

        <motion.div 
        variants={variants.boyAnim}
        className="hidden lg:flex absolute right-[380px] bottom-0 z-10">
          <img
          src={boyImg}
          className="w-[209px] h-[495px]"
          alt="boy avatars"
          />
        </motion.div>

      </motion.div>
    </section>
  )
};

export default Hero;
