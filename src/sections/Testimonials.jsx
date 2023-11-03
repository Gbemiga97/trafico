import { motion } from "framer-motion";
import { data, variants } from "../constants";
import { Slider } from "../components";


const Testimonials = () => {

  const {title, pretitle, clients} = data.testimonialData

  return (
    <section className="relative min-h-[600px]">
      <div className="container mx-auto">

        <motion.div 
        variants={variants.staggerTextContainer}
        initial="initial"
        whileInView={'animate'}
        viewport={{
          once: false,
          amount: 0.6
        }}
        className="flex flex-col lg:flex-row">
          <motion.div
          variants={variants.fadeInUp}
          className="lg:w-[40%] my-[2rem] lg:my-0 text-center lg:text-start">
            <h3 className="h3">
              {pretitle}</h3>
            <h2 className="h2 mb-6">
              {title}</h2>
            </motion.div>

        <motion.div 
        variants={variants.fadeInLeft}
        className="lg:w-[60%] lg:absolute lg:right-0">
          <Slider clients={clients} />
        </motion.div>
        </motion.div>

      </div>
    </section>
  )
};

export default Testimonials;
