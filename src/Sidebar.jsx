const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <div
      className={`${
        sidebar
          ? `  bg-[#d4d6ed]  h-full w-[53%] md:w-[45%] overflow-x-hidden fixed top-0 right-0 z-[100]  -translate-x-30 ease-linear transition-all duration-300 delay-100  `
          : `  bg-[#d4d6ed] h-full w-full overflow-x-hidden fixed top-0 right-0 z-[100]  translate-x-full ease-linear transition-all duration-300  delay-100   `
      }`}
    >
      <section className="grid grid-rows-3 place-items-center gap-10 md:gap-24 ">
        <button onClick={() => setSidebar(false)}>
          <img
            src="/Images/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="relative left-[370%] bottom-[19px] md:left-[150px] "
          />
        </button>

        <div className="grid gap-3  text-[#313131] font-Inter font-semibold text-[16px] text-center">
          <h3>Home</h3>
          <h3>Pricing</h3>
          <h3>API Docs</h3>
        </div>
        <div className="flex flex-col items-center gap-3">
          <button className="uppercase text-[16px] ;leading-[24px] font-normal font-Inter w-[94px] rounded-full h-[38px] border text-[#313131]">
            Login
          </button>
          <button className="uppercase text-[16px] ;leading-[24px] font-normal font-Inter text-[#313131]">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  )
}

export default Sidebar
