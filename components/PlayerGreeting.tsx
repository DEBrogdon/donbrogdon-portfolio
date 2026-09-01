"use client"

import {useState} from "react";

type PlayerGreetingProps = {
    greeting: string;
    location: string;
    age: number;
    isOnline: boolean;
}

export default function PlayerGreeting({greeting, location, age, isOnline} : PlayerGreetingProps) {
    const [name, setName] = useState("");

    return (
        <div>
            <p>{greeting}, {name} from {location}, {age} - Status: {isOnline ? "Online" : "Offline"}</p>
            <input
                type="text"
                onChange={(event) => setName(event.target.value)}
            />
        </div>
    );
}