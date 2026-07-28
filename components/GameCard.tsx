type GameCardProps = {
    name: string;
}

export default function GameCard({name}: GameCardProps) {
    return (
        <div><h3>{name}</h3></div>
    );
}