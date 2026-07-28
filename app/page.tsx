import GameCard from "@/components/GameCard";
export default function Home() {
    const games = [
        { name: "Skyrim" },
        { name: "Civilization V" },
        { name: "ESO" },
        { name: "Oblivion" }
    ];

    return (
        <main>
            {games.map(game => {
                return <GameCard name={game.name} />;
            })}
        </main>
    );
}