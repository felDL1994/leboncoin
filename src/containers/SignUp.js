import React from "react";
import Cookies from "js-cookie";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div>
        <button
          onClick={() => {
            const token = "1234";
            Cookies.set("userToken", token, { expires: 3000 });
          }}
        >
          S'enregistrer
        </button>
      </div>
    </div>
  );
};

export default SignUp;
