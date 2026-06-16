import { apiFetch } from "../api";
import { useState } from "react";



type Fighter = {
    name: string;
    photo: string;
};

export default function Fighters() {
    const [apiData, setApiData] = useState([]);
    const [category, setCategory] = useState("Bantamweight");

    const getCategoryValue = () => category;

    const handleClick = () => {
        const selectedCategory = getCategoryValue();

        apiFetch(`/fighters?category=${selectedCategory}`).then((data) => {
                setApiData(data.response || []);
            }).catch((err) => console.error(err));
    };

    return (
        <div>
            <div className={"selectors-container"}>
                <select
                    className="form-select form-select-sm"
                    id="category-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Bantamweight">Bantamweight</option>
                    <option value="Catch Weight">Catch Weight</option>
                    <option value="Featherweight">Featherweight</option>
                    <option value="Flyweight">Flyweight</option>
                    <option value="Heavyweight">Heavyweight</option>
                    <option value="Light Heavyweight">Light Heavyweight</option>
                    <option value="Lightweight">Lightweight</option>
                    <option value="Middleweight">Middleweight</option>
                    <option value="Open Weight">Open Weight</option>
                    <option value="Super Heavyweight">Super Heavyweight</option>
                    <option value="Welterweight">Welterweight</option>
                    <option value="Women's Bantamweight">Women's Bantamweight</option>
                    <option value="Women's Featherweight">Women's Featherweight</option>
                    <option value="Women's Flyweight">Women's Flyweight</option>
                    <option value="Women's Lightweight">Women's Lightweight</option>
                    <option value="Women's Strawweight">Women's Strawweight</option>
                </select>
                <button onClick={handleClick}>Click me</button>
            </div>
            <div className={"d-grid gap-4 cards-container"}>
                {apiData.map((fighter: Fighter, index: number) => (
                    <div key={index} id={"fight-" + index} className={"card"}>

                        <img className={"card-img-top"} src={fighter.photo} alt={fighter.name} />
                        <div className={"card-body"}><p>{fighter.name}</p></div>
                    </div>
                ))}
            </div>
        </div>
    );
}