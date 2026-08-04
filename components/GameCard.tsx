type GameCardProps = {
    name: string;
    genre: string;
    year: number;
}

export default function GameCard({name, genre, year}: GameCardProps) {
    return (
        <div><h3>{year} {name} - {genre}</h3></div>
    );
}