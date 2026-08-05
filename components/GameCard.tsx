"use client";
import { useState } from "react";

type GameCardProps = {
    name: string;
    genre: string;
};

export default function GameCard({ name, genre }: GameCardProps) {
    const [likes, setLikes] = useState(0);

    return (
        <div>
            <h3>{name}</h3>
            <p>{genre}</p>

            <p>Likes: {likes}</p>

            <button onClick={() => setLikes(likes + 1)}>Like</button>
        </div>
    );
}