import {FaYoutube, FaInstagram, FaGithub} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { variants } from '../constants';

const Copyright = () => {
  return (
    <motion.div 
    variants={variants.fadeInUp}
    initial='initial'
    whileInView={'animate'}
    className='h-[140px]'>
      <div className="container mx-auto h-full">

        <div className='flex justify-between items-center h-full lg:pr-24'>
          <small>
            Copyright &copy; {new Date().getFullYear()}
          </small>

          <div className='flex gap-x-4'>
            <div className='w-9 h-9 bg-accent hover:bg-accent-hover text-white
            rounded-full flex justify-center items-center transition'>
              <a href="/">
                <FaYoutube className='text-lg' />
              </a>
            </div>
            <div className='w-9 h-9 bg-accent hover:bg-accent-hover text-white
            rounded-full flex justify-center items-center transition'>
              <a href="/">
                <FaInstagram className='text-lg' />
              </a>
            </div>
            <div className='w-9 h-9 bg-accent hover:bg-accent-hover text-white
            rounded-full flex justify-center items-center transition'>
              <a href="/">
                <FaGithub className='text-lg' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Copyright;
