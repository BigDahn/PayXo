import React from 'react'

const Footer = () => {
  return (
    <main className="align-element">
      <section className="flex flex-col pt-10 pb-8 md:pt-28">
        <div>
          <section className=" grid gap-2 md:flex md:justify-between">
            <article className="grid place-items-center md:place-items-start">
              <h3 className="w-[213px] font-bold font-Inter leading-[30px] text-[20px] text-[#1F2148] pb-2 md:text-[15px] md:leading-[23px] lg:leading-[30px] lg:text-[20px]">
                What Will You Build?
              </h3>
              <p className="w-[294px] md:w-[208px] lg:w-[301px] font-normal lg:text-[16px] lg:leading-[24px] text-[12px] leading-[18px] text-[#1F2148] text-center md:text-left md:text-[9px] md:leading-[14px]">
                Check out our documentation and start integrating today. We
                can't wait to see what you'll build.
              </p>
              <div className="pt-4">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="w-[269px] h-[50px] rounded-3xl pl-5 border lg:w-[269px] lg:h-[50px] md:w-[210px] md:h-[31px] md:pl-3 lg:pl-5"
                />
                <div className="w-[34px] h-[34px] rounded-full bg-[#1F2148] flex items-center justify-center  lg:w-[34px] lg:h-[34px] md:w-[21px] md:h-[21px] relative bottom-[40px] left-[220px]  lg:bottom-[40px] lg:left-[220px] md:bottom-[25px] md:left-[177px]  ">
                  <img
                    src="/Images/Vector (9).png"
                    alt="email"
                    className="w-[13px]"
                  />
                </div>
              </div>
            </article>
            <article className="flex justify-between pb-3 md:gap-10 lg:gap-20">
              <ul>
                <h4 className=" text-[14px] leading-[21px] lg:text-[20px] font-Inter font-bold lg:leading-[30px]  text-[#1F2148] md:text-[15px] md:leading-[23px] ">
                  About Us
                </h4>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  {' '}
                  Why We Best
                </li>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  {' '}
                  What We Do
                </li>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  Services
                </li>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  API Doc
                </li>
              </ul>
              <ul>
                <h4 className=" text-[14px] leading-[21px] lg:text-[20px] font-Inter font-bold lg:leading-[30px]  text-[#1F2148] md:text-[15px] md:leading-[23px] ">
                  {' '}
                  Product
                </h4>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  Login
                </li>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  {' '}
                  Pricing
                </li>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  Privacy Policy{' '}
                </li>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  {' '}
                  Terms of Service
                </li>
              </ul>
              <ul>
                <h4 className=" text-[14px] leading-[21px] lg:text-[20px] font-Inter font-bold lg:leading-[30px]  text-[#1F2148] md:text-[15px] md:leading-[23px] ">
                  Social
                </h4>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  Facebook
                </li>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  Twitter
                </li>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  Linkedin
                </li>
                <li className="font-Inter font-normal text-[12px] leading-[26px] lg:text-[14px] lg:leading-[35px]  text-[#1F2148] md:text-[9px] md:leading-[21px] ">
                  Pinterest
                </li>
              </ul>
            </article>
          </section>
        </div>

        <div className="border-t-2">
          <div className=" grid place-items-center md:flex md:justify-between pt-2">
            <h4 className="font-normal text-[10px] font-Inter md:text-[7px] lg:text-[12px] text-[#1F2148] ">
              Copyright 2010 - 2021{' '}
              <span>
                Pay<span className="italic text-[0.6rem]">XO</span>
              </span>
            </h4>
            <h6 className="font-normal order-first md:order-last text-[10px] md:text-[7px] lg:text-[12px] font-Inter text-[#1F2148] ">
              Privacy Policy I Website Terms
            </h6>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Footer
