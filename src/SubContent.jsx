import React from 'react'

const SubContent = () => {
  return (
    <main className="align-element hidden md:grid lg:mt-16">
      <div>
        <img
          src="/Images/Vector (7).png"
          alt=""
          className=" md:w-[187px] md:h-[156px]  lg:w-[286px]  lg:h-[239px] relative md:left-[44%] md:top-[87px] lg:left-[500px] lg:top-[1px]"
        />
        <img
          src="/Images/Vector (4).png"
          alt=""
          className=" md:w-[187px] md:h-[156px] lg:w-[286px] lg:h-[239px] relative md:left-[65%] md:top-10 lg:left-[720px] lg:top-[-70px] rotate-[-8deg] "
        />
      </div>
      <article className=" flex justify-center lg:gap-20 md:gap-12  md:bottom-[200px] lg:bottom-[440px] relative">
        <div className="w-[305px] lg:w-[468px]">
          <h3 className="w-[294px] lg:w-[451px] font-bold md:text-[33px] md:leading-[42px] lg:text-[48px] lg:leading-[60px] text-[#1F2148]">
            Compliance Made Easy
          </h3>
          <p className="font-bold font-Inter md:text-[11px] lg:text-[18px] md:leading-[17px] lg:leading-[27px] text-[#13AAA1] ">
            Method handles compliance{' '}
            <span className="font-normal  font-Inter md:text-[11px] lg:text-[18px] lg:leading-[27px] md:leading-[17px] text-[#2C2F62] ">
              requirements, identity verification, and bank partnerships so you
              can focus on building.
            </span>
          </p>
          <ul className="md:text-[11px] lg:text-[18px] font-normal md:leading-[23px] lg:leading-[36px] font-Inter text-[#2C2F62]">
            <li className="flex items-center gap-2">
              <img src="/Images/Vector (8).png" alt="" />
              Real-time risk assessment for every payment.
            </li>
            <li className="flex items-center gap-2">
              <img src="/Images/Vector (8).png" alt="" /> Automatic KYC & AML
              verifications.
            </li>
            <li className="flex items-center gap-2">
              <img src="/Images/Vector (8).png" alt="" />
              Lowest risk of fraud, failure payments.
            </li>
          </ul>
        </div>

        <div className=" w-[385px] lg:w-[620px]">
          <div className="border-none md:h-[213px] lg:h-[326px] bg-white md:w-[276px] lg:w-[422px] rounded-2xl shadow-lg">
            <div className="border-b bg-[#1F2148] rounded-t-2xl h-[53px] flex justify-center items-center">
              <p className="text-white font-Inter font-bold text-[16px]">
                Pay<span className="italic">XO</span>
              </p>
            </div>
            <div className="flex flex-wrap  items-center justify-center gap-3 mt-3 lg:mt-8 ">
              <div className="border-none bg-[#E3F5F4] md:w-[72px] md:h-[53px] lg:w-[110px] lg:h-[80px] rounded-md flex justify-center items-center">
                <p className=" md:text-[6px] md:leading-[8px] lg:text-[9px] text-center font-Inter font-bold lg:leading-[13px] text-[#1F2148]">
                  Seamless User Onboarding
                </p>
              </div>
              <div className="border-none md:w-[72px] md:h-[53px] lg:w-[110px] lg:h-[80px] bg-[#E3F5F4] rounded-md flex justify-center items-center ">
                <p className="  md:text-[5px] md:leading-[7px] lg:text-[8px] text-center font-Inter font-bold lg:leading-[12px] text-[#1F2148]">
                  Frictionless ACH Paayments
                </p>
              </div>
              <div className="border-none md:w-[72px] md:h-[53px] lg:w-[110px] lg:h-[80px] rounded-md bg-[#E3F5F4]  flex justify-center items-center ">
                <p className="  md:text-[4px] md:leading-[6px]  lg:text-[7px]  text-center font-Inter font-bold lg:leading-[10px] text-[#1F2148]">
                  Integrated Debt-Repayment
                </p>
              </div>
              <div className="border-none md:w-[104px] md:h-[67px] lg:w-[160px] lg:h-[103px] rounded-md bg-[#FBF4FF] flex items-center justify-center">
                <p className="   md:text-[6px] md:leading-[8px]   lg:text-[9px] lg:leading-[13px] text-center font-bold md:w-[61px] lg:w-[94px] font-Inter text-[#1F2148] ">
                  Banking Partnership Handled
                </p>
              </div>
              <div className="border-none md:w-[104px] md:h-[67px]  lg:w-[160px] lg:h-[103px] rounded-md shadow-lg flex justify-center items-center">
                <p className=" md:text-[6px] md:leading-[8px] lg:text-[9px] md:w-[68px] lg:w-[106px] lg:leading-[13px] text-center font-bold font-Inter text-[#1F2148] ">
                  Compliance and Risk Management Included
                </p>
              </div>
            </div>
            <img
              src="/Images/Group 20132.png"
              alt=""
              className="md:w-[87px] xl:w-[133px] relative md:left-[270px] md:bottom-[126px] lg:bottom-[155px] lg:left-[415px] xl:bottom-[190px] xl:left-[410px]"
            />
            <img
              src="/Images/Group 20133.png"
              alt=""
              className=" md:w-[175px]  xl:w-[268px] relative md:bottom-[100px] md:left-[50px] lg:bottom-[70px] lg:left-[120px] xl:bottom-[128px] xl:left-[87px]"
            />
          </div>
        </div>
      </article>
    </main>
  )
}

export default SubContent
