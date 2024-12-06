const MoreInfo = () => {
  return (
    <>
      <main className="align-element grid place-items-center md:flex md:justify-evenly md:place-items-start mt-20">
        <div className="order-last mt-8 md:order-first md:mt-14 lg:mt-0">
          <div>
            <div className=" md:w-[400px] lg:w-[600px]">
              <div>
                <img
                  src="/Images/Vector (7).png"
                  alt=""
                  className="relative w-[160px] top-3 left-[100px] md:w-[205px]  md:top-0  md:left-[80px] lg:w-[339px]  lg:left-[150px] lg:top-0"
                />
                <img
                  src="/Images/subHe.png"
                  alt=""
                  className=" w-[340px] bottom-[180px] right-[20px] md:w-[358px] lg:w-[592px] relative md:bottom-[240px] md:right-[20px] lg:bottom-[370px] lg:right-10"
                />
                <div className="relative top-[-216px] right-[-23px] md:bottom-[290px] md:top-[-290px] md:right-0 lg:bottom-[460px] lg:left-[50px] lg:top-[-450px] lg:right-0">
                  <div className=" bg-[#002240] border-none rounded-lg w-[155px] h-[85px] md:w-[200px] md:h-[110px]  lg:w-[250px] lg:h-[135px]">
                    <img
                      src="/Images/ayment.png"
                      alt=""
                      className=" w-[145px] top-[6px] left-[4px] md:w-[173px] lg:w-[200px] md:top-[10px] md:left-[11px] relative lg:left-[34px] lg:top-[20px]"
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-50 bottom-[230px] left-[50px] md:bottom-[310px] md:left-[215px] lg:bottom-[470px] lg:left-[360px]">
                <img
                  src="/Images/Vector (3).png"
                  alt=""
                  className=" w-[46px] md:w-[87px] lg:w-[164px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" w-[260px] md:w-[298px] lg:w-[441px] font-Inter lg:mt-20">
            <h3 className="font-bold text-[34px] leading-[42.5px]  md:text-[40px] md:leading-[60px] text-[#1F2148] ">
              Designed for Developers
            </h3>
            <p className="font-bold text-[14px] leading-[21px] md:text-[16px] w-[270px]  md:w-[320px] lg:w-[370px] md:leading-[27px] text-[#13AAA1] ">
              It's that simple.
              <span className="font-normal text-[#2C2F62]">
                With just a few lines of code, you can start moving money on
                behalf of your users.
              </span>
            </p>
            <ul className="text-[11px] leading-[23px] font-Inter text-[#1F2148] lg:text-[16px] lg:leading-[36px]">
              <li className="flex items-center gap-2">
                {' '}
                <img src="/Images/Vector (8).png" alt="" />
                Build quickly. No banking partner required.
              </li>
              <li className="flex items-center gap-2">
                <img src="/Images/Vector (8).png" alt="" />
                No long-term or expensive agreements.{' '}
              </li>
              <li className="flex items-center gap-2">
                <img src="/Images/Vector (8).png" alt="" />
                Be up and running in an afternoon.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default MoreInfo
