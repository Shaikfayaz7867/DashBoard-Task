import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const onButtonSignInClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <form className="absolute top-[409px] left-[832px] w-[385px] h-[356px]">
      <div className="absolute top-[0px] left-[0px] w-[385px] h-[317px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
      </div>
      <input
        className="[border:none] bg-field-color-darker absolute h-[11.24%] w-[84.42%] top-[41.57%] right-[7.79%] bottom-[47.19%] left-[7.79%] rounded-3xs"
        type="password"
        placeholder="Password"
      />
      <input
        className="[border:none] bg-field-color-darker absolute h-[11.24%] w-[84.42%] top-[17.98%] right-[7.01%] bottom-[70.79%] left-[8.57%] rounded-3xs"
        type="email"
        placeholder="Email"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[247px] left-[30px] w-[325px] h-10"
        onClick={onButtonSignInClick}
      >
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[325px] h-10">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-black" />
        </button>
        <b className="absolute top-[9px] left-[112.58px] text-base inline-block font-montserrat text-white text-center w-[101.96px] h-[21.71px]">
          Sign In
        </b>
      </button>
      <div className="absolute top-[30px] left-[30px] text-base font-lato text-black text-left">
        Email address
      </div>
      <div className="absolute top-[119px] left-[30px] text-base font-lato text-black text-left">
        Password
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[208px] left-[31px] text-base font-lato text-link text-left inline-block">
        Forgot password?
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[337px] left-[62px] text-base font-lato text-center inline-block">
        <span className="text-secondary-text">{`Don’t have an account? `}</span>
        <span className="text-link">Register here</span>
      </button>
    </form>
  );
};

export default LoginForm;
