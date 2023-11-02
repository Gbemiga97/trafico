import {Header} from ".";
import Image from "next/image";


const Hero = ({heroData, headerData, navData}) => {
  const {title, boyImg, girlImg, truckImg, btnText} = heroData

  return (
    <section className="bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950x] lg:mb-80">
      <div className="container mx-auto relative min-h-[800px] lg:min-h-[950px]">
        
        <div>
          <Header headerData={headerData} navData={navData} />
        </div>
        <h1 className="h1 max-w-[740px] text-white pt-[12rem] mb-[60px]">
          {title}</h1>
        <button className="btn">
          {btnText}</button>

        <div className="hidden lg:flex absolute bottom-0">
          <Image 
          src={girlImg}
          width={206}
          height={495} />
        </div>

        <div className="hidden lg:flex absolute -bottom-[25%] -left-[30%]">
          <Image
          src={truckImg}
          width={811}
          height={395}
          />
        </div>

        <div className="hidden lg:flex absolute right-[380px] bottom-0 z-10">
          <Image 
          src={boyImg}
          width={206}
          height={495}
          />
        </div>

      </div>
    </section>
  )
};

export default Hero;
