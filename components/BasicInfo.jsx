import React, { useEffect, useState } from "react";
import { GetTypeColor } from "../components/GetTypeColor";
import { FetchPokemonDetails } from "../components/FetchPokemonDetails";
import { CapitalizeFirstLetter } from "../components/CapitalizeFirstLetter";
import { GetIdFromUrl } from "../components/GetIdFromUrl";
import RenderStatsInfo from "./RenderStatsInfo";

export function BasicInfo({ id }) {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(id - 1) * 20}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data.results);
            });
    }, [id]);

    const [pokemonDetails, setPokemonDetails] = useState({});

    useEffect(() => {
        const fetchPokemonDetailsForAll = async () => {
            const details = {};
            for (const mon of pokemon) {
                const result = await FetchPokemonDetails(mon.url);
                details[mon.name] = result;
            }
            setPokemonDetails(details);
        };

        if (pokemon.length > 0) {
            fetchPokemonDetailsForAll();
        }
    }, [pokemon]);

    const [showInfo, setShowInfo] = useState(false)

    const checkInfosBtn = () => {
        setShowInfo((prevShowInfo) => !prevShowInfo)
    }

    return (
        <div>
            <div className="app">
                <ul className="pokemon">
                    {pokemon.map((mon) => (
                        <li key={mon.name}>
                            <div className="pokeCard">
                                <div>
                                    <img
                                        className="pokeImgStyle"
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${GetIdFromUrl(
                                            mon.url
                                        )}.png`}
                                        alt="Image of the Pokémon"
                                    />
                                </div>

                                <div>
                                    <h2>{CapitalizeFirstLetter(mon.name)}</h2>
                                </div>

                                <div>
                                    <button onClick={checkInfosBtn} className="checkPokeStatusBtn">Check Infos</button>

                                    {showInfo && (
                                        <div>
                                            <div>
                                                {pokemonDetails[mon.name] && (
                                                    <>
                                                        <strong>Types:</strong>{" "}
                                                        {pokemonDetails[mon.name].types.map((type, index) => (
                                                            <span
                                                                key={type}
                                                                style={{ color: GetTypeColor(type) }}
                                                                className="pokeTypeBorder"
                                                            >
                                                                {`${type}${index !== pokemonDetails[mon.name].types.length - 1 ? " " : ""}`}
                                                            </span>
                                                        ))}
                                                    </>
                                                )}
                                            </div>
                                            <div>
                                                {pokemonDetails[mon.name] && (
                                                    <>
                                                        <strong>Abilities:</strong>{" "}
                                                        {pokemonDetails[mon.name].abilities.map((ability) => (
                                                            <span key={ability}>
                                                                {`${ability}` + " "}
                                                            </span>
                                                        ))}
                                                    </>
                                                )}
                                            </div>
                                            <div>
                                                {pokemonDetails[mon.name] && (
                                                    <>
                                                        <strong>Hidden Abilities:</strong>{" "}
                                                        {pokemonDetails[mon.name].hiddenAbilities.map((ability) => (
                                                            <span key={ability}>{ability}</span>
                                                        ))}
                                                    </>
                                                )}
                                            </div>
                                            <div>
                                                {pokemonDetails[mon.name] && (
                                                    <>
                                                        <strong>Height:</strong>{" "}
                                                        <span>{pokemonDetails[mon.name].height}</span>
                                                    </>
                                                )}
                                            </div>
                                            <div>
                                                {pokemonDetails[mon.name] && (
                                                    <>
                                                        <strong>Weight:</strong>{" "}
                                                        <span>{pokemonDetails[mon.name].weight}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    <RenderStatsInfo pokemonDetails={pokemonDetails[mon.name]} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}
export default BasicInfo;
