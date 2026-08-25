"use client";

import { useState } from "react";

type DoorLockProps = {
    name: string;
};

export default function DoorLock({ name }: DoorLockProps) {
    const [doorLock, setDoorLock] = useState(true);

    return (
        <div>
            <p>
                {name}: {doorLock ? "Locked" : "Unlocked"}
            </p>

            <button onClick={() => setDoorLock(!doorLock)}>
                {doorLock ? "Unlock Door" : "Lock Door"}
            </button>
        </div>
    );
}