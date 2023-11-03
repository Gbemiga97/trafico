import {HiMenu,} from 'react-icons/hi'
import { data } from '../constants';
import { useEffect, useState } from 'react';
import { Nav, NavMobile } from '../components';
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-scroll';


const Header = () => {
  const {logoImgV1, logoImgV2, btnText} = data.headerData
  const [header, setHeader] = useState(false)
  const [showNav, setShowNav] = useState(false)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setHeader(true) : setHeader(false)
    })
  })

  return (
    <header className={`${header ? 'bg-white p-3 rounded-md drop-shadow-primary' :
     'py-[40px]'} fixed  w-full left-0 right-0 mx-auto max-w-[90vw] transition
    lg:max-w-[1120px] z-20 flex justify-between items-center duration-300`}>
      <Link 
       onClick={() => setShowNav(false)}
      spy={true}
      to="/">
        <img src={`${header ? logoImgV2 : logoImgV1}`}
        className={`${header ? 'w-[180px]' : 'w-[212px]'} h-[50px] cursor-pointer`}
        alt="logo" />
      </Link>

      <div className='hidden lg:flex gap-x-[96px]'>
        <Nav header={header} />

        <button
        onClick={() => setShowNav(prev => !prev)}
        className='btn'>
          {btnText}</button>
      </div>

    <button
    onClick={() => setShowNav(prev => !prev)}
     className='lg:hidden cursor-pointer text-4xl text-accent-hover'>
     {
      showNav ? <AiOutlineClose /> : <HiMenu /> 
     }
    </button>

    <div className={`${showNav ? 'max-h-[154px]' : 'max-h-0'}
    lg:hidden absolute top-full mt-2 w-full left-0 rounded-md 
    overflow-hidden shadow-2xl transition-all`}>
      <NavMobile setShowNav={setShowNav} />
    </div>
    </header>
  )
};

export default Header;
