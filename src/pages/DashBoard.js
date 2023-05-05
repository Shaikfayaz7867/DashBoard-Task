import Navigation1 from "../components/Navigation1";
import TotalTransactions from "../components/TotalTransactions";
import TotalRevenues from "../components/TotalRevenues";
import TotalLikes from "../components/TotalLikes";
import TotalUsers from "../components/TotalUsers";
import ActivitiesCard from "../components/ActivitiesCard";
import TopProductsCard from "../components/TopProductsCard";
import SchedulesCard from "../components/SchedulesCard";
import ChartWeeks from "../components/ChartWeeks";
import LineChart2Icon from "../components/LineChart2Icon";
import LineChart1Icon from "../components/LineChart1Icon";
import Header from "../components/Header";

const DashBoard = () => {
  return (
    <div className="relative bg-white w-[1440px] h-[1024px] overflow-hidden">
      <div className="absolute top-[0px] left-[0px] bg-background w-[1440px] h-[1024px] overflow-hidden">
        <Navigation1 />
        <TotalTransactions />
        <TotalRevenues />
        <TotalLikes />
        <TotalUsers />
        <ActivitiesCard />
        <TopProductsCard />
        <SchedulesCard />
        <ChartWeeks />
        <LineChart2Icon />
        <LineChart1Icon />
        <img
          className="absolute h-[2.34%] w-[1.44%] top-[14.55%] right-[42.1%] bottom-[83.11%] left-[56.46%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/total-transactions-icon.svg"
        />
        <Header />
      </div>
    </div>
  );
};

export default DashBoard;
