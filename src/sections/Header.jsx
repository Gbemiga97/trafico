import {HiMenu} from 'react-icons/hi'
import { data } from '../constants';
import { useEffect, useState } from 'react';
import { Nav, NavMobile } from '../components';

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
      <a href="/">
        <img src={`${header ? logoImgV2 : logoImgV1}`}
        className={`${header ? 'w-[180px]' : 'w-[212px]'} h-[50px]`}
        alt="logo" />
      </a>

      <div className='hidden lg:flex gap-x-[96px]'>
        <Nav header={header} />
        <button className='btn'>
          {btnText}</button>
      </div>

    <div className='lg:hidden cursor-pointe '>
     <HiMenu className='text-4xl text-accent-hover' /> 
    </div>

    <div className={`${showNav ? 'max-h-[154px]' : 'max-h-0'}
    lg:hidden absolute top-full mt-2 w-full left-0 `}>
      <NavMobile />
    </div>
    </header>
  )
};

export default Header;
