/*import GameCard from "@/components/GameCard";
import ToggleMenu from "@/components/ToggleMenu";
import SecretMessage from "@/components/SecretMessage";
import PowerButton from "@/components/PowerButton";
import DoorLock from "@/components/DoorLock";
import Counter from "@/components/Counter";
import NameInput from "@/components/NameInput";*/
import PlayerGreeting from "@/components/PlayerGreeting";
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

            <PlayerGreeting greeting="Shalom" location="Texas" age={40} isOnline={true}/>
            <hr/>
            <PlayerGreeting greeting="Howdy" location="Oklahoma" age={35} isOnline={false}/>
        </main>
    );
}