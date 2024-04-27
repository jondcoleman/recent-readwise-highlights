import React, { useState } from "react";
import { useCookies } from "react-cookie";

const TokenInput = () => {
  const [token, setToken] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const cookieOptions = {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    secure: true,
    // httpOnly: true,
  };

  const handleSaveToken = () => {
    setCookie("token", token, cookieOptions);
    // reload the page to fetch data with the new token
    window.location.reload();
  };

  return (
    <form onSubmit={handleSaveToken}>
      <input
        type="text"
        value={token}
        onChange={handleTokenChange}
        placeholder="Enter token"
        className="border rounded p-2 mr-2 my-2 flex-grow w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 m2 rounded"
      >
        Save Token
      </button>
    </form>
  );
};

export default TokenInput;
