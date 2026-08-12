"use client";

import { useState } from "react";

export default function SecretMessage() {
    const [messageVisible, setMessageVisible] = useState(false);

    return (
        <div>
            <button  onClick={() => setMessageVisible(!messageVisible)}>
                Show Message
            </button>

            {messageVisible && <p>You found the secret message!</p>}
        </div>
    );

}