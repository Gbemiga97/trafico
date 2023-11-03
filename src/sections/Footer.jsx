import { data, variants } from "../constants";
import { motion } from "framer-motion";
import {CgArrowLongRight} from 'react-icons/cg'
import { Link } from "react-scroll";

const Footer = () => {

  const {truckImg, hillImg, text, logo, links, form} = data.footerData


  return (
    <footer className="bg-darkblue  lg:bg-transparent lg:bg-footer
    lg:bg-no-repeat lg:bg-left-bottom lg:min-h-[738px] pt-12 lg:pt-0 relative">
      <motion.div 
      variants={variants.staggerFooterContainer}
      initial='initial'
      whileInView={'animate'}
      viewport={{
        once: false,
        amount: 0.1
      }}
      className="container mx-auto lg:min-h-[738] flex flex-col justify-between">

        <motion.div 
        variants={variants.footerTruckAnim}
        className="hidden lg:flex absolute -top-24 -left-[6.8%]">
          <img 
          className="w-[430px] h-[210px]"
          src={truckImg} 
          alt="avatar" />
        </motion.div>

        <div className="hidden lg:flex absolute z-10 top-[22px] left-0">
          <img 
          className="w-[137px] h-[92px]"
          src={hillImg}
           alt="avatar" />
        </div>

        <motion.div 
        variants={variants.fadeInUp}
        className="flex flex-col lg:flex-row items-center lg:pr-[95px] lg:gap-x-[95px]
        gap-y-10 lg:gap-py-0">

          <div className="text-white flex-1  border-l-[10px]
          border-accent py-4 lg:mt-24">
            <p className="max-w-[330px] text-[20px] leading-[1.8rem] ml-[40px]">
              {text}</p>
          </div>

          <form className="w-full max-w-[550px] bg-white flex-1 rounded-[10px]
          lg:order-2 flex flex-col px-[2.3rem] lg:px-[75px] py-[25px] lg:py-[52px]
          space-y-[40px] drop-shadow-primary " >
            <div className="flex flex-col">
              <label
              className="font-light mb-[10px]"
              htmlFor="name">
                {form.labelName}
              </label>
              <input 
              id="name"
              className="input"
              type="text"
              placeholder={form.placeholderName}
              />
            </div>
            <div className="flex flex-col">
            <label
              className="font-light mb-[10px]"
              htmlFor="email">
                {form.labelEmail}
              </label>
              <input 
              id="email"
              className="input"
              type="email"
              placeholder={form.placeholderEmail}
              />
            </div>
            <button className="btn self-start hover:bg-accent-hover transition">
              {form.btnText}
              <CgArrowLongRight 
              className="text-[1.8rem]"
              />
              </button>
          </form>
        </motion.div>

        <motion.div
        variants={variants.fadeInUp}
        className="py-[120px] flex flex-col lg:flex-row justify-between lg:pr-24">
          
          <div className="mb-6 cursor-pointer mx-auto lg:mb-0 lg:mx-0">
            <Link
            spy={true}
            to="/">
              <img 
              className="w-[170px] h-[41px]"
              src={logo}
               alt="logo" />
            </Link>
          </div>
          <ul className="flex flex-col items-center lg:flex-row gap-y-4 lg:gap-y-0
          gap-x-[100px] text-center">
            {
              links.map(({name, href}, i) => (
                <li
                className="text-white cursor-pointer font-light hover:text-accent transition"
                key={i}>
                  <Link
                   to={href}>{name}</Link>
                </li>
              ))
            }
          </ul>
          </motion.div>
      </motion.div>
    </footer>
  )
};

export default Footer;
