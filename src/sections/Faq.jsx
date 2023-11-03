import { motion } from "framer-motion";
import { data, variants } from "../constants";
import { Accordion } from "../components";

const Faq = () => {

  const {title, pretitle, boyImg, accordions} = data.faqData

  return (
    <section className="min-h-[1150px] lg:bg-faq bg-no-repeat bg-right-top
    lg:pt-40 lg:pb-24 mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">

        <motion.div 
        variants={variants.staggerTextContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{
          once: false,
          amount: 0.6
        }}
        className="relative text-center lg:text-left flex flex-col lg:flex-row justify-center 
        lg:justify-start items-center pt-8 pb-16 lg:pt-16 lg:pb-32">
          <motion.div
          variants={variants.fadeInRight}
          className="lg:max-w-[45%]">
            <h3 className="h3">
              {pretitle}</h3>
            <h2 className="h2 mb-6 lg:mb-12">
              {title}</h2>
          </motion.div>

          <motion.div 
          variants={variants.fadeInLeft}
          className="lg:absolute lg:-right-16 lg:-top-16">
            <img 
            className="lg:w-[708px] lg:h-[498px]"
            src={boyImg} 
            alt="avatar" />
          </motion.div>

        </motion.div>


        <motion.div
        variants={variants.staggerTextContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{
          once: false,
          amount: 0.4
        }}
        className="grid lg:grid-cols-2 gap-x-[20px] gap-y-[10px] items-start">
          {
            accordions.map(( accordion, i) => (
              <Accordion accordion={accordion} key={i} />
            ))
          }
        </motion.div>
      </div>
    </section>
  )
};

export default Faq;
