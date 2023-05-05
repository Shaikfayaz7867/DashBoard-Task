const SchedulesCard = () => {
  return (
    <div className="absolute top-[688px] left-[900px] w-[480px] h-64 text-left text-xs text-icon font-montserrat">
      <div className="absolute top-[0px] left-[0px] w-[480px] h-64">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
      </div>
      <b className="absolute top-[30px] left-[40px] text-lg text-black">
        Today’s schedule
      </b>
      <div className="absolute top-[77px] left-[40px] w-[251px] h-[66px] font-lato">
        <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
          Meeting with suppliers from Kuta Bali
        </b>
        <div className="absolute top-[25px] left-[15px]">14.00-15.00</div>
        <div className="absolute top-[44px] left-[15px]">{`at Sunset Road, Kuta, Bali `}</div>
        <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-lightgreen" />
      </div>
      <div className="absolute top-[34px] left-[398px] text-secondary-text">
        See All
      </div>
      <img
        className="absolute h-[3.13%] w-[1.04%] top-[14.84%] right-[6.25%] bottom-[82.03%] left-[92.71%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector4.svg"
      />
      <div className="absolute top-[156px] left-[40px] w-[227px] h-[66px] font-lato">
        <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
          Check operation at Giga Factory 1
        </b>
        <div className="absolute top-[25px] left-[15px]">18.00-20.00</div>
        <div className="absolute top-[44px] left-[15px]">{`at Central Jakarta `}</div>
        <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-cornflowerblue" />
      </div>
    </div>
  );
};

export default SchedulesCard;
