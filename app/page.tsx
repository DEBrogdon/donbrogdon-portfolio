import GameCard from "@/components/GameCard";
import ToggleMenu from "@/components/ToggleMenu";
export default function Home() {
    //GameCard variables
    /*const games = [
        { name: "Skyrim", genre: "RPG", year: 2011 },
        { name: "Civilization V", genre: "Strategy", year: 2009 },
        { name: "ESO", genre: "MMORPG", year: 2014 },
        { name: "Oblivion", genre: "RPG", year: 2006 },
        { name: "Palworld", genre: "Survival", year: 2026 }
    ];*/

    return (
        //GameCard Code.
        /*<main>
            {games.map(game => {
                return <GameCard name={game.name} genre={game.genre} year={game.year} />;
            })}
        </main>*/

        <main>
            <h1>My Portfolio</h1>

            <ToggleMenu />
        </main>
    );
}