import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navigation1 = () => {
  const navigate = useNavigate();

  const onBoardTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="absolute top-[40px] left-[40px] w-[280px] h-[944px] text-left text-17xl text-white font-montserrat">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-black" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[87.92%] left-[17.86%] text-sm font-montserrat text-white text-left inline-block">
        Help
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[91.84%] left-[17.86%] text-sm font-montserrat text-white text-left inline-block">
        Contact Us
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[43.64%] left-[31.43%] text-lg font-montserrat text-white text-left inline-block">
        Settings
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.08%] left-[31.43%] text-lg font-montserrat text-white text-left inline-block">
        Users
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[30.51%] left-[31.43%] text-lg font-montserrat text-white text-left inline-block">
        Schedules
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[23.94%] left-[31.43%] text-lg font-montserrat text-white text-left inline-block">
        Transactions
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[17.37%] left-[31.43%] text-lg font-bold font-montserrat text-white text-left inline-block">
        Dashboard
      </button>
      <img
        className="absolute h-[2.2%] w-[6.43%] top-[23.94%] right-[75.71%] bottom-[73.86%] left-[17.86%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/transaction-icon.svg"
      />
      <img
        className="absolute h-[2.07%] w-[6.96%] top-[30.64%] right-[75.45%] bottom-[67.29%] left-[17.59%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/schedule-icon.svg"
      />
      <img
        className="absolute h-[1.91%] w-[6.43%] top-[17.58%] right-[75.71%] bottom-[80.51%] left-[17.86%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/dashboard-icon.svg"
      />
      <img
        className="absolute h-[1.91%] w-[6.09%] top-[43.86%] right-[76.06%] bottom-[54.24%] left-[17.86%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/setting-icon.svg"
      />
      <img
        className="absolute h-[1.91%] w-[6.43%] top-[37.29%] right-[75.71%] bottom-[60.81%] left-[17.86%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/user-icon.svg"
      />
      <b
        className="absolute top-[6.36%] left-[17.86%] cursor-pointer"
        onClick={onBoardTextClick}
      >
        Board.
      </b>
    </div>
  );
};

export default Navigation1;
