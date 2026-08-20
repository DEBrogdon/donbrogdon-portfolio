"use client"

import {useState} from "react";

export default function DoorLock() {
    const [doorLock, setDoorLock] = useState(true);

    return (
        <div>
            <button onClick={() => setDoorLock(!doorLock)}>
                {doorLock ? "Unlock Door" : "Lock Door"}
            </button>
            <br/>
            {doorLock ? "Door: Locked" : "Door: Unlocked"}
        </div>
    );
}