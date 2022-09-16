import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import "./App.css";
import { data } from "./data/data";

function App() {
  const [userId, setUserId] = useState("");
  let [userEmail, setUserEmail] = useState("페어의 이메일은?");

  const findUserEmail = (userId) => {
    let result = data.find((a) => a.name === userId);
    if (!userId || result === undefined) {
      setUserEmail("잘못 입력하셨거나 없는 이름입니다.");
      return;
    }
    setUserEmail(result.email);
  };
  const handleInput = (e) => {
    setUserId(e.target.value);
  };

  const handleOnClick = () => {
    findUserEmail(userId);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <div className="flex flex-col items-center text-center min-h-screen font-san">
      <div className="pt-32 flex flex-col text-center justify-center">
        <div className="font-bold text-7xl">페어 찾기</div>
        <div className="font-semibold text-3xl mt-5">
          찾으시는 페어 분의 성함을 적어주세요
        </div>
        <div className="flex justify-center my-10 text-center">
          <input
            type="text"
            value={userId}
            placeholder="성함"
            onChange={handleInput}
            onKeyPress={handleOnKeyPress}
            className="w-42 h-14 outline outline-offset-1  outline-blue-100 focus:outline-none focus:ring focus:border-blue-900 mr-7 rounded-xl p-3 shadow-lg transition duration-300 ease-in hover:ease-int"
          ></input>

          <button
            className="outline outline-offset-2 font-semibold hover:text-white focus:outline:none hover:bg-blue-500 outline-blue-500 w-32 rounded-xl shadow-xl transition duration-300 ease-in-out"
            onClick={handleOnClick}
          >
            검색
          </button>
        </div>

        <div className="font-semibold text-3xl my-3">
          👇 누르시면 복사 됩니다! 👇
        </div>
        <div>
          <CopyToClipboard
            text={userEmail}
            onCopy={() => alert("주소가 복사되었습니다")}
            className="h-20 w-[50rem] flex items-center font-bold text-2xl justify-center bg-blue-500 hover:scale-105 text-white rounded-xl shadow-2xl transition duration-150 ease-out hover:ease-in"
          >
            <div>{userEmail}</div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default App;
