const TotalLikes = () => {
  return (
    <div className="absolute top-[129px] left-[895.79px] w-[221.05px] h-[120px] text-left text-sm text-black font-lato">
      <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
        <button className="cursor-pointer [border:none] p-0 bg-mistyrose absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl" />
      </div>
      <div className="absolute top-[45px] left-[25.21px] inline-block w-[81px]">
        Total Likes
      </div>
      <b className="absolute top-[67px] left-[25.58px] text-5xl inline-block font-open-sans w-[65.26px]">
        9,721
      </b>
      <img
        className="absolute h-1/5 w-[10.54%] top-[16.67%] right-[11.56%] bottom-[63.33%] left-[77.9%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
    </div>
  );
};

export default TotalLikes;
