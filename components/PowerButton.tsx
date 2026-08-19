"use client";

import { useState } from "react";

export default function PowerButton() {
    const [powerOn, setPowerOn] = useState(false);

    return (
        <div>
            <button onClick={() => setPowerOn(!powerOn)}>Toggle Power</button>
            <br/>
            {powerOn ? "Power: ON": "Power: OFF"}
        </div>
    );
}