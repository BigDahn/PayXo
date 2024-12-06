import React from 'react'

const Article = () => {
  return (
    <main className=" bg-[#E3F5F4] mt-[-250px] md:mt-[-340px] lg:mt-[-530px] h-[418px] lg:h-[498px] md:h-[360px]">
      <article className="align-element lg:pt-6  ">
        <div className="flex flex-col justify-center items-center h-[299px] md:h-[179px] lg:h-[293px]">
          <img
            src="/Images/circle.png"
            alt=""
            className=" w-[115px] md:w-[109px] lg:w-[165px] relative bottom-[-100px] md:bottom-[-50px] md:left-[113px]  lg:bottom-[-78px] lg:left-[162px] rotate-[6deg] md:rotate-[19deg]"
          />
          <h3 className="font-bold font-Inter pb-6  md:pb-4 lg:pb-8 w-[308px] lg:w-[654px] text-center sm:text-[34px] sm:leading-[42.5px] lg:text-[48px] lg:leading-[60px] md:w-[348px] text-[#2C2F62]">
            What Will You{' '}
            <span className=" relative lg:text-[#13AAA1] "> Build?</span>
          </h3>

          <p className="font-normal text-[14px] leading-[21px] w-[300px] md:text-[12px] md:leading-[18px] lg:text-[20px] lg:leading-[30px] font-Inter lg:w-[598px] md:w-[407px] text-center text-[#2C2F62]">
            Method handles compliance requirements, identity verification, and
            bank partnerships so you can focus on building.
          </p>
          <button className="border rounded-full bg-[#2C2F62] h-[42px] w-[120px] mt-6 md:mt-5 lg:mt-8 text-white md:h-[32px] md:w-[102px] lg:h-[60px] lg:w-[193px] lg:pt-3 lg:pb-3 md:pb-3 md:pt-1 md:text-[10px] lg:text-[18px] font-bold font-Inter leading-[26px] pt-2 pb-2">
            Get Started
          </button>
        </div>
      </article>
      <div className="align-element flex">
        <img
          src="/Images/Group 20105.png"
          alt=""
          className="w-[100px] relative left-[72%] bottom-[57px] md:bottom-[120px] md:left-[80%] lg:bottom-[260px] lg:left-[890px]"
        />
        <img
          src="/Images/Group 2018.png"
          alt=""
          className="w-[100px] relative left-[105px] bottom-[-43px]  lg:bottom-[0px] md:bottom-[-40px] md:left-[60%] lg:left-[750px]"
        />
        <img
          src="/Images/En.png"
          alt=""
          className=" w-[100px] relative left-[-170px] top-[43px] lg:left-0 lg:top-10 md:left-[-10%] md:top-10 "
        />
        <img
          src="/Images/Group 20143.png"
          alt=""
          className="w-[100px] relative bottom-[50px]  right-[320px] md:bottom-[120px] md:right-[260px] lg:bottom-[260px] lg:right-[200px]"
        />
      </div>
    </main>
  )
}

export default Article
