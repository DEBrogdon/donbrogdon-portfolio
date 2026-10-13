"use client"

import { useState } from "react";

type platformButtonProp = {
    onSelect : () => void;
}

function PlatformButtons({ onSelect }: platformButtonProp) {
    return (
        <div>
            <button onClick={ onSelect }>PlayStation</button>
        </div>
    );
}

type GameListProps = {
    platform: string;
}

function GameList({platform} : GameListProps) {
    return (
        <div>
            <p>GameList sees: {platform}</p>
        </div>
    );
}

export default function GameBrowserPractice() {
    const [platform, setPlatform] = useState("All");

    return (
        <div>
            <h2>Game Browser Practice</h2>
            <PlatformButtons onSelect={() => setPlatform("PlayStation")} />
            <p>Current Platform: {platform}</p>
            <hr/>
            <GameList platform={platform}/>
        </div>
    );
}
