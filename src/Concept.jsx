const Concept = () => {
  return (
    <main className="align-element md:mt-20 mt-12  grid grid-rows-1 gap-10  place-items-center pb-20 ">
      <div className="font-Inter text-center md:mb-6 md:w-[465px] font-bold text-[44px] text-[#1F2148] ">
        <h3>Build Today Launch Tomorrow</h3>
      </div>
      <section className="font-Inter">
        <article className="grid  gap-6 md:grid-cols-3 md:gap-3  lg:gap-20 ">
          <div>
            <div className="grid gap-3 place-items-center  text-center md:w-[201px] lg:w-[276px] ">
              <img
                src="/Images/Icon.png"
                alt=""
                className=" md:w-[36px] lg:w-[30px]"
              />
              <div className="grid gap-1 place-items-center">
                <h3 className="font-bold md:text-[15px] lg:text-[18px] text-[#1F2148] ">
                  Create a User
                </h3>
                <h6 className=" text-[13px] md:text-[11px] lg:text-[14px] font-normal  text-[#13AAA1] ">
                  Onboard Your Users Using Our API
                </h6>
                <p className=" w-[210px]  md:text-[11px] md:w-[159px] lg:w-[200px] lg:text-[16px] text-[#1F2148] font-normal ">
                  Verify their identity with our automatic KYC & AML screens.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid  gap-3 place-items-center  text-center  md:w-[212px]  lg:w-[270px]">
              <img
                src="/Images/Icon (1).png"
                alt=""
                className="md:w-[36px] lg:w-[35px]"
              />
              <div className="grid gap-1 place-items-center">
                <h3 className="font-bold md:text-[15px] lg:text-[18px] text-[#1F2148] ">
                  Connect Accounts
                </h3>
                <h6 className="  text-[13px]  md:text-[11px] lg:text-[14px] font-normal  text-[#13AAA1] ">
                  Link User's Financial Accounts
                </h6>
                <p className="md:text-[11px] w-[230px] md:w-[159px] lg:w-[213px] lg:text-[16px] text-[#1F2148] font-normal ">
                  Checking accounts, student loans, and mortgages can all be
                  added.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid gap-3 place-items-center text-center  md:w-[212px] lg:w-[270px]">
              <img
                src="/Images/Icon (2).png"
                alt=""
                className="md:w-[50px] lg:w-[50px]"
              />
              <div className="grid gap-1 place-items-center">
                <h3 className="font-bold md:text-[15px] lg:text-[18px] text-[#1F2148] ">
                  Move Money
                </h3>
                <h6 className="  text-[13px]  md:text-[11px] lg:text-[14px] font-normal  text-[#13AAA1]">
                  Send Money on Behalf of Your Users
                </h6>
                <p className="md:text-[11px] w-[260px] md:w-[189px] lg:w-[290px] lg:text-[16px] text-[#1F2148] font-normal">
                  ‍With a single API, you can transfer money to your user's
                  savings or pay their loans.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Concept
