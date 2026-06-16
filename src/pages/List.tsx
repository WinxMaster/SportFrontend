import { apiFetch } from "../api";
import { useState } from "react";


type Fight = {
    slug: string;
    category: string;
};


export default function List() {
    const [apiData, setApiData] = useState([]);
    const [season, setSeason] = useState("2023");
    const [category, setCategory] = useState("all");

    const getSeasonValue = () => season;
    const getCategoryValue = () => category;

    const handleClick = () => {
        const selectedSeason = getSeasonValue();
        const selectedCategory = getCategoryValue();

        apiFetch(`/fights?season=${selectedSeason}` +
            (selectedCategory !== "all" ? `&category=${selectedCategory}` : "")
        ).then((data) => {
                setApiData(data.response || []);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <div className={"selectors-container"}>
                <select
                    className="form-select form-select-sm"
                    id="season-year-select"
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                >
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>

                <select
                    className="form-select form-select-sm"
                    id="category-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="all">All category</option>
                    <option value="Bantamweight">Bantamweight</option>
                    <option value="Catch Weight">Catch Weight</option>
                    <option value="Catchweight">Catchweight</option>
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
                    <option value="Women's Catch Weight">Women's Catch Weight</option>
                    <option value="Women's Featherweight">Women's Featherweight</option>
                    <option value="Women's Flyweight">Women's Flyweight</option>
                    <option value="Women's Lightweight">Women's Lightweight</option>
                    <option value="Women's Strawweight">Women's Strawweight</option>
                </select>

                <button onClick={handleClick}>Click me</button>
            </div>
            <div className={"d-grid gap-4 fights-container"}>
                {apiData.map((fight: Fight, index: number) => (
                    <div className={"card fight-card"} key={index} id={"fight-" + index}>
                        <img
                            className={"card-img-top"}
                            src={"/images/fight_logo.png"}
                            alt={fight.slug}
                        />
                        <div className="card-title"><p>{fight.slug}</p></div>
                        <div className={"card-body"}><p>{fight.category}</p></div>
                    </div>
                ))}
            </div>
        </div>
    );
}