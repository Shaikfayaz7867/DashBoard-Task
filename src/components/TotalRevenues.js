const TotalRevenues = () => {
  return (
    <div className="absolute top-[129px] left-[380px] w-[221.05px] h-[120px] text-left text-sm text-black font-lato">
      <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
        <button className="cursor-pointer [border:none] p-0 bg-honeydew absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl" />
      </div>
      <div className="absolute top-[45px] left-[25px] inline-block w-[124px]">
        Total Revenues
      </div>
      <b className="absolute top-[67px] left-[25px] text-5xl inline-block font-open-sans w-[124px]">
        $2,129,430
      </b>
      <img
        className="absolute h-1/5 w-[11.94%] top-[16.67%] right-[11.6%] bottom-[63.33%] left-[76.45%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

export default TotalRevenues;
