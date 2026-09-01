"use client"

import { useState } from "react";

export default function NameInput() {
    const [name, setName] = useState("");

    return (
        <div>
            <p>Hello, {name}!</p>
            <input
                type="text"
                onChange={(event) => setName(event.target.value)}
            />
        </div>
    );
}