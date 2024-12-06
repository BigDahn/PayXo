const Reviews = () => {
  return (
    <main className="align-element">
      <section className="grid place-items-center md:place-items-start lg:place-items-center ml-0 md:ml-[5%] grid-rows-1 pt-10  lg:pt-24 h-[735px] md:h-[417px] lg:h-[773px] lg:mt-[-230px] lg:ml-0 ">
        <div>
          <section className=" grid place-items-center  md:place-items-start md:flex  gap-6  md:gap-28  lg:justify-evenly md:items-center ">
            <h3 className="lg:text-[48px] lg:leading-[60px] font-Inter font-bold text-[#1F2148] lg:w-[386px] md:w-[180px] w-[281px] md:text-[26px]  md:leading-[33px] text-[34px] leading-[42px] text-center md:text-left">
              What Our Client Saying
            </h3>
            <p className=" ] text-[14px] leading-[21px] text-center md:text-left md:w-[209px] md:text-[9px] md:leading-[14px] lg:w-[393px] font-bold font-Inter lg:text-[18px] text-[#13AAA1] lg:leading-[27px]">
              Method handles compliance,{' '}
              <span className="font-normal font-Inter text-[#2C2F62]">
                requirements, identity verification, and bank partnerships so
                you can focus on building.
              </span>
            </p>
          </section>
          <img
            src="/Images/Vector (3).png"
            alt=""
            className="w-[35px] md:w-[50px] lg:w-[93px] relative bottom-[140px] rotate-[2deg] left-[0px] md:rotate-[-58deg] md:bottom-[45px] md:left-[200px] lg:left-[330px] lg:bottom-[110px]"
          />
        </div>
        <div>
          <section className="grid md:flex md:justify-center md:items-center gap-4 pb-6 md:pb-0  lg:pt-20">
            <div className="border-none bg-white w-[245px] h-[153px] lg:w-[400px] xl:w-[476px] lg:h-[283px] rounded-lg shadow-2xl flex flex-col pl-6 lg:pl-10  gap-3 justify-center">
              <div className="flex items-center gap-3">
                <img
                  src="/Images/customer1.jpeg"
                  alt=""
                  className=" w-[31px] lg:w-[60px] rounded-full"
                />
                <div>
                  <h6 className="font-bold text-[12px] leading-[18px] lg:text-[18px] lg:leading-[27px] font-Inter text-[#2C2F62]">
                    Jose Bethancourt{' '}
                  </h6>
                  <p className="font-Inter text-[12px] leading-[18px] lg:text-[18px] lg:leading-[27px]">
                    CEO Grad Joy
                  </p>
                </div>
              </div>
              <p className="w-[213px] lg:w-[330px] xl:w-[374px] font-Inter text-[10px] lg:text-[16px] font-normal leading-[15px] lg:leading-[24px]">
                Method saved the day! We were able to quickly integrate and
                provide a full experience to our users.
              </p>

              <h6 className="font-normal text-[20px] lg:text-[37px] text-[#1F2148] font-Sacramento">
                Jose Bethancourt
              </h6>
            </div>
            <div className="border-none  bg-white w-[244px] h-[110px] lg:w-[330px] xl:w-[375px] lg:h-[204px] rounded-lg shadow-sm flex flex-col pl-6 pt-1.5 lg:pl-8  gap-3 justify-center">
              <div className="flex items-center gap-3">
                <img
                  src="/Images/customer2.jpeg"
                  alt=""
                  className=" w-[27px] lg:w-[43px] rounded-full"
                />
                <div>
                  <h6 className="font-bold text-[10px] leading-[15px] lg:text-[12px] lg:leading-[19px] font-Inter text-[#2C2F62]">
                    Kevin Griffiths
                  </h6>
                  <p className="font-Inter  text-[10px] leading-[15px] lg:text-[14px] lg:leading-[21px]">
                    {' '}
                    Founder
                  </p>
                </div>
              </div>
              <p className="  lg:w-[280px] xl:w-[315px] font-Inter lg:text-[12px] font-normal lg:leading-[18px]  text-[8px] leading-[12px] w-[201px]">
                we had to send checks to pay our users' credit cards. Method has
                improved our user experience.
              </p>

              <h6 className="font-normal lg:text-[32px]  text-[18px]  text-[#1F2148] font-Sacramento">
                Kevin Griffiths
              </h6>
            </div>
            <div className="border-none ml-16 md:ml-0  bg-white w-[156px] h-[96px] lg:w-[275px] lg:h-[178px] rounded-lg flex flex-col pl-5 pt-1.5  lg:pl-7 gap-3 justify-center">
              <div className="flex items-center gap-2">
                <img
                  src="/Images/customer3.jpeg"
                  alt=""
                  className="w-[20px] xl:w-[37px] rounded-full"
                />
                <div>
                  <h6 className="font-bold lg:text-[11px] lg:leading-[16px]  text-[6px] leading-[9px] font-Inter text-[#2C2F62]">
                    Olivia Sacks
                  </h6>
                  <p className="font-Inter  text-[6px] leading-[9px] lg:text-[12px] lg:leading-[18px]">
                    VP @ Global Benefits Co
                  </p>
                </div>
              </div>
              <p className="lg:w-[230px] font-Inter lg:text-[10px] font-normal lg:leading-[15px] w-[127px]  text-[6px] leading-[9px]">
                Our financial wellness offering lacked the ability to easily
                move money on behalf of our users.
              </p>

              <h6 className="font-normal lg:text-[23px] text-[13px] text-[#1F2148] font-Sacramento">
                OliviaSacks
              </h6>
            </div>
          </section>
        </div>
        <article className="flex justify-center items-center ml-6  mb-10 gap-2 md:relative md:bottom-[200px] md:left-[550px] lg:bottom-[330px] lg:left-[470px]">
          <div className="border-none h-[35px] w-[35px] bg-[#1F2148] rounded-full flex items-center justify-center shadow-2xl">
            <img src="/Images/Vector (10).png" alt="" className="w-[7px]" />
          </div>
          <div className="border-none h-[29px] w-[29px] bg-[] rounded-full flex items-center justify-center bg-white">
            <img src="/Images/Vector (11).png" alt="" className="w-[7px]" />
          </div>
        </article>
      </section>
    </main>
  )
}

export default Reviews
