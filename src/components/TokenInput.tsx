import React, { useState } from "react";
import { useCookies } from "react-cookie";

const TokenInput = () => {
  const [token, setToken] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleSaveToken = () => {
    setCookie("token", token, { path: "/" });
    // reload the page to fetch data with the new token
    window.location.reload();
  };

  return (
    <div>
      <input
        type="text"
        value={token}
        onChange={handleTokenChange}
        placeholder="Enter token"
        className="border rounded p-2"
      />
      <button
        onClick={handleSaveToken}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Token
      </button>
    </div>
  );
};

export default TokenInput;
