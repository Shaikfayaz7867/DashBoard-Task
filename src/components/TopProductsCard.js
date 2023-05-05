const TopProductsCard = () => {
  return (
    <div className="absolute top-[688px] left-[380px] w-[480px] h-64 text-left text-sm text-black font-montserrat">
      <div className="absolute top-[0px] left-[0px] w-[480px] h-64">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
      </div>
      <div className="absolute top-[72px] left-[244px] w-[98px] h-9">
        <img
          className="absolute top-[3px] left-[0px] w-[11px] h-[11px]"
          alt=""
          src="/ellipse-6.svg"
        />
        <b className="absolute top-[0px] left-[21px]">Basic Tees</b>
        <div className="absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text">
          55%
        </div>
      </div>
      <div className="absolute top-[31px] left-[327px] w-[97px] h-[15px] text-xs text-secondary-text">
        <div className="absolute top-[0px] left-[0px] inline-block w-[97px]">
          May - June 2021
        </div>
      </div>
      <img
        className="absolute h-[1.95%] w-[1.67%] top-[14.45%] right-[8.96%] bottom-[83.59%] left-[89.38%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector3.svg"
      />
      <div className="absolute top-[129px] left-[244px] w-[168px] h-9">
        <img
          className="absolute top-[3px] left-[0px] w-[11px] h-[11px]"
          alt=""
          src="/ellipse-61.svg"
        />
        <b className="absolute top-[0px] left-[21px]">Custom Short Pants</b>
        <div className="absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text">
          31%
        </div>
      </div>
      <div className="absolute top-[186px] left-[244px] w-32 h-9">
        <img
          className="absolute top-[3px] left-[0px] w-[11px] h-[11px]"
          alt=""
          src="/ellipse-62.svg"
        />
        <b className="absolute top-[0px] left-[21px]">Super Hoodies</b>
        <div className="absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text">
          14%
        </div>
      </div>
      <b className="absolute top-[30px] left-[40px] text-lg">Top products</b>
      <img
        className="absolute top-[82px] left-[60px] w-[134px] h-[134px]"
        alt=""
        src="/pie-chart.svg"
      />
    </div>
  );
};

export default TopProductsCard;
