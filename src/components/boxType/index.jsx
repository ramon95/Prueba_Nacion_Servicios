import React, { useState, useEffect } from "react";

export const BoxType = ({ type }) => {
    const [typeColor, setTypeColor] = useState('bg-normal');
    useEffect(() => {
        switch (type) {
            case 'normal':
                setTypeColor('bg-normal');
                break;
            case 'fighting':
                setTypeColor('bg-fighting');
                break;
            case 'flying':
                setTypeColor('bg-flying');
                break;
            case 'poison':
                setTypeColor('bg-poison');
                break;
            case 'ground':
                setTypeColor('bg-ground');
                break;
            case 'rock':
                setTypeColor('bg-rock');
                break;
            case 'bug':
                setTypeColor('bg-bug');
                break;
            case 'ghost':
                setTypeColor('bg-ghost');
                break;
            case 'steel':
                setTypeColor('bg-steel');
                break;
            case 'fire':
                setTypeColor('bg-fire');
                break;
            case 'water':
                setTypeColor('bg-water');
                break;
            case 'grass':
                setTypeColor('bg-grass');
                break;
            case 'electric':
                setTypeColor('bg-electric');
                break;
            case 'psychic':
                setTypeColor('bg-psychic');
                break;
            case 'ice':
                setTypeColor('bg-ice');
                break;
            case 'dragon':
                setTypeColor('bg-dragon');
                break;
            case 'dark':
                setTypeColor('bg-dark');
                break;
            case 'fairy':
                setTypeColor('bg-fairy');
                break;
            case 'unknown':
                setTypeColor('bg-unknown');
                break;
            case 'shadow':
                setTypeColor('bg-shadow');
                break;
            default:
                break;
        }
    }, [])
    return(
        <div className={`${typeColor} w-4/5 rounded text-center`}>
            <p className="text-white capitalize">{type}</p>
        </div>
    );
};
