import React from "react";

export const NoPokemonFound =  () => {
    return (
        <div>
            <h2>This location doesn't seem to have any pokémon.</h2>
            <button>Try another location</button>
        </div>
    );
};