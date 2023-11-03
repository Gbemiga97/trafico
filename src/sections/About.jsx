import { data, variants } from "../constants";
import { motion } from "framer-motion";

const About = () => {

  const {title, subtitle, text, boyImg} = data.aboutData

  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div 
        variants={variants.staggerTextContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{once: false, amount: 0.6}}
        className="flex flex-col lg:flex-row gap-[20px] items-center ">

          <motion.div 
          variants={variants.fadeInDown}
           className="flex-1 mt-[74px]">
            <h3 className="h3">
              {title}</h3>
            <p className="lead max-w-[470px] mb-[70px]">
              {subtitle}</p>

            <div className="bg-accent/10 border-l-[10px] border-accent
            max-w-[570px] bh-[160px] flex items-center justify-center mb-8 lg:mb-0">
              <p className="text-[20px] leading-normal lg:text-[24px] lg:leading-[2rem] 
              font-medium max-w-[320px] lg:max-w-[460px]">
                {text}</p>
            </div>
          </motion.div>

          <motion.div
          variants={variants.fadeInUp}
          className="flex-1">
            <img 
            className="lg:w-[575px] lg:h-[480px]"
            src={boyImg}
             alt="avatar" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
};

export default About;
