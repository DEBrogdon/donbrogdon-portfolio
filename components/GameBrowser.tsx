"use client"

import { useState } from "react";

export default function GameBrowser() {
    const [search, setSearch] = useState("");
    const [showRPGsOnly, setShowRPGsOnly] = useState(false);
    const [showCompletedOnly, setShowCompletedOnly] = useState(false);
    const [showRatingOnly, setShowRatingOnly] = useState(false);
    const [platform, setPlatform] = useState("All");

    const games = [
        { id: 1, title: "The Elder Scrolls V: Skyrim", genre: "RPG", year: 2011, platform: "PC", rating: 9, completed: true },
        { id: 2, title: "The Elder Scrolls IV: Oblivion", genre: "RPG", year: 2006, platform: "PC", rating: 9, completed: true },
        { id: 3, title: "Morrowind", genre: "RPG", year: 2002, platform: "PC", rating: 8, completed: false },
        { id: 4, title: "Minecraft", genre: "Survival", year: 2011, platform: "PC", rating: 10, completed: false },
        { id: 5, title: "Palworld", genre: "Survival", year: 2024, platform: "PC", rating: 8, completed: false },
        { id: 6, title: "Civilization V", genre: "Strategy", year: 2010, platform: "PC", rating: 10, completed: true },
        { id: 7, title: "Civilization VI", genre: "Strategy", year: 2016, platform: "PC", rating: 8, completed: true },
        { id: 8, title: "Grand Theft Auto III", genre: "Action", year: 2001, platform: "PC", rating: 8, completed: true },
        { id: 9, title: "Grand Theft Auto: Vice City", genre: "Action", year: 2002, platform: "PC", rating: 9, completed: true },
        { id: 10, title: "Grand Theft Auto: San Andreas", genre: "Action", year: 2004, platform: "PC", rating: 10, completed: true },
        { id: 11, title: "Grand Theft Auto IV", genre: "Action", year: 2008, platform: "PC", rating: 9, completed: true },
        { id: 12, title: "Grand Theft Auto V", genre: "Action", year: 2013, platform: "PC", rating: 9, completed: true },
        { id: 13, title: "Red Dead Redemption 2", genre: "Action", year: 2018, platform: "PC", rating: 10, completed: false },
        { id: 14, title: "Elden Ring", genre: "RPG", year: 2022, platform: "PC", rating: 9, completed: false },
        { id: 15, title: "Sekiro: Shadows Die Twice", genre: "Action", year: 2019, platform: "PC", rating: 9, completed: false },
        { id: 16, title: "Dark Souls", genre: "RPG", year: 2011, platform: "PC", rating: 9, completed: false },
        { id: 17, title: "Dark Souls III", genre: "RPG", year: 2016, platform: "PC", rating: 9, completed: false },
        { id: 18, title: "Resident Evil", genre: "Horror", year: 1996, platform: "PlayStation", rating: 8, completed: false },
        { id: 19, title: "Resident Evil 2", genre: "Horror", year: 1998, platform: "PlayStation", rating: 9, completed: false },
        { id: 20, title: "Resident Evil 4", genre: "Horror", year: 2005, platform: "GameCube", rating: 10, completed: false },
        { id: 21, title: "Fallout 3", genre: "RPG", year: 2008, platform: "PC", rating: 9, completed: true },
        { id: 22, title: "Fallout: New Vegas", genre: "RPG", year: 2010, platform: "PC", rating: 10, completed: true },
        { id: 23, title: "Fallout 4", genre: "RPG", year: 2015, platform: "PC", rating: 8, completed: true },
        { id: 24, title: "The Witcher 3", genre: "RPG", year: 2015, platform: "PC", rating: 10, completed: true },
        { id: 25, title: "World of Warcraft", genre: "MMORPG", year: 2004, platform: "PC", rating: 9, completed: false },
        { id: 26, title: "The Elder Scrolls Online", genre: "MMORPG", year: 2014, platform: "PC", rating: 8, completed: false },
        { id: 27, title: "Half-Life", genre: "FPS", year: 1998, platform: "PC", rating: 10, completed: true },
        { id: 28, title: "Half-Life 2", genre: "FPS", year: 2004, platform: "PC", rating: 10, completed: true },
        { id: 29, title: "Portal", genre: "Puzzle", year: 2007, platform: "PC", rating: 9, completed: true },
        { id: 30, title: "Portal 2", genre: "Puzzle", year: 2011, platform: "PC", rating: 10, completed: true }
    ];

    return (
        <div>
            <p>Search: <input type="text" onChange={(event) => setSearch(event.target.value)}/></p>
            {games
                .filter(game =>
                    (
                        (game.genre.toLowerCase().includes(search.toLowerCase()) || game.title.toLowerCase().includes(search.toLowerCase()))
                        &&
                        (!showRPGsOnly || game.genre.toLowerCase() === "rpg")
                        &&
                        (!showCompletedOnly || game.completed)
                        &&
                        (!showRatingOnly || game.rating === 10)
                        &&
                        (platform === "All" || game.platform === platform)
                    )

                )
                .map(game =>
                    <p key={game.id}>{game.title}</p>
                )
            }
            <span>---</span><br/>
            <button onClick={() => setShowRPGsOnly(!showRPGsOnly)}>{showRPGsOnly ? "Show All Games" : "Show RPGs Only"}</button>
            <br/>
            <button onClick={() => setShowCompletedOnly(!showCompletedOnly)}>{showCompletedOnly ? "Show All Games" : "Show Completed Only"}</button>
            <br/>
            <button onClick={() => setShowRatingOnly(!showRatingOnly)}>{showRatingOnly ? "Show All Games" : "Show 10/10 Games Only"}</button>
            <br/>
            <select onChange={(event) => setPlatform(event.target.value)}>
                <option value="All">All</option>
                <option value="PC">PC</option>
                <option value="PlayStation">PlayStation</option>
                <option value="GameCube">GameCube</option>
            </select>
        </div>
    );
}