import { useState } from "react";

function App() {
    const allColor = ["red", "pink", "blue", "orange", "yellow", "aqua"];

    const [color, setColor] = useState("olive");

    return (
        <div className="w-full h-screen" style={{ backgroundColor: color }}>
            <h1 className="text-3xl font-semibold text-center pt-10">
                Background Color Changer
            </h1>
            <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
                <div
                    className="flex flex-wrap justify-center gap-3 px-5 py-3 rounded-full"
                    style={{ backgroundColor: "white" }}
                >
                    {allColor.map((item) => (
                        <button
                            key={item}
                            className="px-4 py-2 rounded-3xl text-white font-bold"
                            style={{ backgroundColor: item }}
                            onClick={() => setColor(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
