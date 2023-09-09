import { useState } from "react";
import "./App.css";

function App() {
    const [lang, setLang] = useState(["HTML", "CSS", "JavaScript"]);
    const [name, setName] = useState("");

    const addLang = () => {
        setLang([...lang, name]);
        setName("");
    };
    console.log(5);

    return (
        <>
            <h1>Add Language</h1>
            <div>
                {lang.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
            <div className="card">
                <p>
                    <label htmlFor="text">Add Language</label>
                    <input
                        id="text"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <button onClick={addLang}>Submit</button>
            </div>
            <p className="read-the-docs">
                Enter values in input field to add Language.
            </p>
        </>
    );
}

export default App;
