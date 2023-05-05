const TotalUsers = () => {
  return (
    <div className="absolute top-[129px] left-[1158.95px] w-[221.05px] h-[120px] text-left text-sm text-black font-lato">
      <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
        <button className="cursor-pointer [border:none] p-0 bg-lavender absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl" />
      </div>
      <img
        className="absolute h-1/5 w-[16.65%] top-[16.67%] right-[11.39%] bottom-[63.33%] left-[71.95%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector2.svg"
      />
      <div className="absolute top-[45px] left-[25.58px] inline-block w-[85.26px]">
        Total Users
      </div>
      <b className="absolute top-[67px] left-[25.58px] text-5xl inline-block font-open-sans w-[44.21px]">
        892
      </b>
    </div>
  );
};

export default TotalUsers;
