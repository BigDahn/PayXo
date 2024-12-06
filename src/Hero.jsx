import React from 'react'

const Hero = () => {
  return (
    <div className="align-element grid place-items-center pt-12 md:pt-10 md:flex md:justify-between  md:items-center">
      <div className="">
        <h3 className="capitalize text-[34px] leading-[42.5px] md:text-[34px] lg:text-[64px] font-bold text-[#1F2148] font-Inter md:leading-[42.5px] lg:leading-[80px]">
          The Easiest
        </h3>
        <h3 className="capitalize text-[34px] leading-[42.5px]  tracking-wide md:text-[34px] lg:text-[64px] font-bold text-[#1F2148] font-Inter md:leading-[42.5px] lg:leading-[80px]">
          Way <span className="lowercase pr-1.5 md:pr-2"> to</span>
          <span className="inline-block pl-1.5   md:pl-0 absolute  lg:top-[265px] left-[136px] top-[149px] lg:left-[240px] md:top-[180px] md:left-[148px]  xxl:top-[265px] xxl:left-[340px] xl:top-[265px] xl:left-[310px] ">
            <img
              src="/Images/circle.png"
              alt="circle"
              className=" w-[74px] h-[56px] md:w-[88px] md:h-[56px] lg:w-[167px] lg:h-[107px] xl:w-[170px] "
            />
          </span>
          <span className="relative left-0.5 md:left-2 lg:left-5 xl:left-6 md:text-[34px] lg:text-[64px] font-bold capitalize text-[#13aaa1] font-Inter lg:leading-[80px] md:leading-[42.5px] text-[32px]  leading-[42.5px]  ">
            pay
          </span>
          <span className=" pl-[4.8px] md:pl-6 lg:pl-12">Your</span>
        </h3>
        <h3 className="capitalize md:text-[34px] lg:text-[64px] font-bold text-[#1F2148] font-Inter md:leading-[42.5px] lg:leading-[80px] text-[34px] leading-[42.5px] ">
          User’s Credit Card
        </h3>
        <p className="md:w-[289.11px] lg:w-[30rem] font-Inter lg:text-[20px] md:text-[14px] md:leading-[21px] lg:leading-[30px] font-normal text-[#1F2148]">
          Method allows developers to make bank transfers, move money, and pay
          debts on behalf of their users all through a single API
        </p>

        <button className="bg-[#1F2148] text-white rounded-full h-9 w-32 mt-3">
          Get Started
        </button>
        <div className="hidden md:flex">
          <img
            src="/public/Images/Vector (1).png"
            alt=""
            className="relative lg:w-[110.44px] md:w-[58px] md:left-[22rem] md:bottom-[2rem]  lg:left-[24rem] lg:bottom-12"
          />
        </div>
        <div className="flex md:hidden">
          <img
            src="/Images/Vector (3).png"
            alt=""
            className="relative w-[58px] left-[9rem] bottom-[2rem]  "
          />
        </div>
      </div>
      <div className="lg:w-[500px] md:w-[279.37px]">
        <img src="/Images/5ad7521634412697476886cb1f4b4b59.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
