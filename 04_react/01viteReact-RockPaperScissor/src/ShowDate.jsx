import { useState } from "react";

function ShowDate() {
    let [date, setDate] = useState(new Date().toLocaleString());
    setInterval(() => {
        setDate(() => new Date().toLocaleString());
    }, 1000);

    return (
        <h1 className="text-3xl font-semibold px-10 py-5 mt-2 text-stone-50 rounded-lg backdrop-blur-3xl backdrop-brightness-90">
            {date}
        </h1>
    );
}
export default ShowDate;
