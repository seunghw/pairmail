import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import "./App.css";
import { data } from "./data/data";
function App() {
  const [userId, setUserId] = useState("");
  let [userEmail, setUserEmail] = useState("");

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
    <div className="App">
      <div className="container">페어 찾기</div>
      <div>찾으시는 페어분의 성함을 적어주세요</div>
      <input
        type="text"
        value={userId}
        onChange={handleInput}
        onKeyPress={handleOnKeyPress}
      ></input>
      <label>
        <button onClick={handleOnClick}> 검색</button>
      </label>
      <CopyToClipboard
        text={userEmail}
        onCopy={() => alert("주소가 복사되었습니다")}
      >
        <div className="resultBox">{userEmail}</div>
      </CopyToClipboard>
    </div>
  );
}

export default App;
