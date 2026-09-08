"use client"

import { useState } from "react";

export default function GameSearch() {
    const [search, setSearch] = useState("");

    const games = [
        "Skyrim",
        "Oblivion",
        "Palworld",
        "Minecraft",
        "Civilization V"
    ];

    return (
        <div>
            {games
                .filter(game =>
                    game.toLowerCase().includes(search.toLowerCase())
                )
                .map(game=>
                    <p key={game}>{game}</p>
                )
            }
            <p>---</p>
            <p>Searching For: {search}</p>
            <p>---</p>
            <input type="text" onChange={(event) => setSearch(event.target.value)}/>
        </div>
    );
}