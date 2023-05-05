const TotalTransactions = () => {
  return (
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[129px] left-[637.89px] w-[221.05px] h-[120px]">
      <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-oldlace" />
      </div>
      <div className="absolute top-[45px] left-[25.11px] text-sm font-lato text-black text-left inline-block w-[126px]">
        Total Transactions
      </div>
      <b className="absolute top-[67px] left-[25.11px] text-5xl inline-block font-open-sans text-black text-left w-[65.26px]">
        1,520
      </b>
    </button>
  );
};

export default TotalTransactions;
