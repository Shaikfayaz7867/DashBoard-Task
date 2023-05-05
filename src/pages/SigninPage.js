import RightSide from "../components/RightSide";
import LeftSide from "../components/LeftSide";
import LoginForm from "../components/LoginForm";

const SigninPage = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-[72px] text-black font-montserrat">
      <RightSide />
      <LeftSide />
      <div className="absolute top-[464px] left-[171px] font-bold text-white">
        Board.
      </div>
      <LoginForm />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[354px] left-[832px] w-[180px] h-[30px]">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <button className="cursor-pointer [border:none] p-0 bg-white absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
        </div>
        <div className="absolute top-[8px] left-[43px] text-xs font-montserrat text-secondary-text text-center">
          Sign in with Google
        </div>
        <img
          className="absolute top-[8px] left-[19px] w-3.5 h-3.5 overflow-hidden"
          alt=""
          src="/googleicon-1.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[354px] left-[1037px] w-[180px] h-[30px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <button className="cursor-pointer [border:none] p-0 bg-white absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
        </button>
        <div className="absolute top-[8px] left-[46px] text-xs font-montserrat text-secondary-text text-center">
          Sign in with Apple
        </div>
        <img
          className="absolute top-[7px] left-[24px] w-[11.5px] h-3.5 overflow-hidden"
          alt=""
          src="/apple-1.svg"
        />
      </button>
      <b className="absolute top-[260px] left-[832px] text-17xl">Sign In</b>
      <div className="absolute top-[309px] left-[832px] text-base font-lato">
        Sign in to your account
      </div>
    </div>
  );
};

export default SigninPage;
