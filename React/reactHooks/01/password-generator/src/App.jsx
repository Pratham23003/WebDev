import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8); //default length of pass will be 8
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook for passing the password reference
  const passwordRef = useRef(null);
  const handleCopyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-orange-400 text-4xl text-center mt-5">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-gray bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none text-white px-3 py-0.5 text-center bg-blue-700 shrink-0 hover:cursor-pointer"
            onClick={handleCopyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 mt-4.5">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-orange-400">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1 mt-4.5">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            ></input>
            <label htmlFor="numberInput" className="text-orange-400">
              Number
            </label>
          </div>

          <div className="flex items-center gap-x-1 mt-4.5">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            ></input>
            <label htmlFor="characterInput" className="text-orange-400">
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
