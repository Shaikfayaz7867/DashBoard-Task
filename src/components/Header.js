const Header = () => {
  return (
    <div className="absolute top-[60px] left-[380px] w-[1000px] h-[30px] text-left text-sm text-light-grey font-lato">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-5xl font-bold font-montserrat text-black text-left inline-block">
        Dashboard
      </button>
      <div className="absolute top-[0px] left-[713px] w-[180px] h-[30px]">
        <select className="absolute top-[0px] left-[0px] w-[180px] h-[30px]" />
        <div className="absolute top-[6px] left-[15px]">Search...</div>
        <img
          className="absolute top-[9px] left-[153px] w-[12.71px] h-3"
          alt=""
          src="/search-icon.svg"
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[970px] w-[30px] h-[30px]">
        <img
          className="absolute h-[170%] w-[173.33%] top-[0%] right-[-73.33%] bottom-[-70%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image-1@2x.png"
        />
      </button>
      <img
        className="absolute h-[66.67%] w-[1.8%] top-[16.67%] right-[5.9%] bottom-[16.67%] left-[92.3%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector5.svg"
      />
    </div>
  );
};

export default Header;
