"use client"

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add One</button>
            <br/>
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>Subtract One</button>
        </div>
    );
}