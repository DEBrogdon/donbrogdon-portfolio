"use client";

import { useState } from "react";

export default function ToggleMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setMenuOpen(!menuOpen)}>
                Toggle Menu
            </button>

            {menuOpen && <p>The menu is open!</p>}
        </div>
    );
}

