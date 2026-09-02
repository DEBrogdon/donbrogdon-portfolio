"use client"

import { useState } from "react";

export default function GameSearch() {
    const games = [
        "Skyrim",
        "Oblivion",
        "Palworld",
        "Minecraft",
        "Civilization V"
    ];

    return (
        <div>
            {games.map(game => <p key={game}>{game}</p>)}
        </div>
    );
}