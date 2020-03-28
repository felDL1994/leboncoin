import React from "react";
import Cookies from "js-cookie";

const SignUp = () => {
  return (
    <span>
      <div>
        <button
          onClick={() => {
            const token = "1234";
            Cookies.set("userToken", token, { expires: 3000 });
          }}
        >
          Se connecter
        </button>
      </div>
    </span>
  );
};

export default SignUp;
