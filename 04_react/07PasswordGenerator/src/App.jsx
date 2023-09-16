import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-={}";

    for (let i = 0; i < length; i++) {
      const chatAt = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(chatAt);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
  }, [password]);

  const passRef = useRef(null);

  return (
    <>
      <div className="bg-stone-700 max-w-3xl mx-auto my-5 rounded-lg py-5 px-5">
        <h1 className="text-center text-white font-bold text-2xl py-4">
          Password Generator
        </h1>
        <div className="px-[5%] py-7 rounded-md bg-zinc-900">
          <div className="flex mx-auto justify-center rounded-md overflow-hidden">
            <input
              className="w-full bg-white text-orange-500 font-medium text-lg px-5"
              type="text"
              value={password}
              readOnly
              ref={passRef}
            />
            <button
              className="bg-blue-500 px-5 py-2 text-white text-lg font-bold"
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex space-x-3 md:space-x-7 flex-wrap justify-center mt-2">
            <div className="space-x-2 flex">
              <input
                type="range"
                min={6}
                max={25}
                id="length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="text-orange-500" htmlFor="length">
                Length: {length}
              </label>
            </div>
            <div className="space-x-2 flex">
              <input
                type="checkbox"
                id="numbers"
                onClick={() => setNumAllowed((prev) => !prev)}
              />
              <label className="text-orange-500" htmlFor="numbers">
                Numbers
              </label>
            </div>
            <div className="space-x-2 flex">
              <input
                type="checkbox"
                id="characters"
                onClick={() => setCharAllowed((prev) => !prev)}
              />
              <label className="text-orange-500" htmlFor="characters">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
