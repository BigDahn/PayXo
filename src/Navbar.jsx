const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="align-element flex justify-between items-center py-4 font-Inter text-[#1F2148] font-bold ">
      <header>
        <h3>
          Pay<span className="italic text-[1.3rem]">XO</span>
        </h3>
      </header>

      <div className="hidden lg:flex justify-evenly gap-10 text-[#313131] font-Inter font-normal text-[16px]">
        <h3>Home</h3>
        <h3>Pricing</h3>
        <h3>API Docs</h3>
      </div>

      <div className=" hidden lg:flex gap-4">
        <button className="uppercase text-[16px] ;leading-[24px] font-normal font-Inter w-[94px] rounded-full h-[38px] border text-[#313131]">
          Login
        </button>
        <button className="uppercase text-[16px] ;leading-[24px] font-normal font-Inter text-[#313131]">
          Sign Up
        </button>
      </div>
      <button className="lg:hidden" onClick={() => setSidebar(true)}>
        <img src="/Images/nav.png" alt="" />
      </button>
    </nav>
  )
}

export default Navbar
