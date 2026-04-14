import { apiFetch } from "../api";
import { useState } from "react";

export default function List() {
    const [apiData, setApiData] = useState([]);

    const handleClick = () => {
        apiFetch("/fights?season=2023").then(data => setApiData(data.response)).catch(err => console.error(err));
    };
    return (
        <div>
            <h1>List Page</h1>
            <button onClick={handleClick}>Click me</button>
            {apiData.map((fight:any, index) => (
                <div key={index}>
                    <p>{fight.slug}</p>
                    <p>{fight.category}</p>
                </div>
            ))}
        </div>
    );
}