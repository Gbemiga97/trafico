import { motion } from "framer-motion";
import { data, variants } from "../constants";

const How = () => {

  const {title, subtitle, girlImg} = data.howData

  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div 
        variants={variants.staggerTextContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{once: false, amount: 0.6}}
        className="flex flex-col-reverse lg:flex-row gap-10 items-center">

          <motion.div 
          variants={variants.fadeInRight}
          className="flex-1">
            <img 
            className="lg:w-[720px] lg:h-[678px]"
            src={girlImg} 
            alt="avatar" />
          </motion.div>

          <motion.div
          variants={variants.fadeInLeft}
          className="flex-1 flex justify-end">
            <div className="max-w-[455px]">
              <h3 className="h3">
                {title}</h3>
              <p className="lead">
                {subtitle}</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
};

export default How;
