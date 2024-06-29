import { useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

const BtnPages = ({ id }) => {

    if (id < 1 || id > 65) {
        return <NotFound />
    }
    return (
        <div className="positioned-arrows">
            <div className="bordered-link">
                <Link to={`/pokePages/${1}`} className="removeStylesLink">
                    <span className="styled-span-color">&laquo;</span>
                </Link>
            </div>

            <div className="bordered-link">
                {id > 1 ? (
                    <Link to={`/pokePages/${id - 1}`} className="removeStylesLink">
                        <span className="styled-span-color">&lsaquo;</span>
                    </Link>
                ) : (
                    <span className="styled-span-color">&lsaquo;</span>
                )}
            </div>

            <div className="bordered-link">
                <span className="styled-span-color">{id}</span>
            </div>

            <div className="bordered-link">
                {id < 65 ? (
                    <Link to={`/pokePages/${id + 1}`} className="removeStylesLink">
                        <span className="styled-span-color">&rsaquo;</span>
                    </Link>
                ) : (
                    <span className="styled-span-color">&rsaquo;</span>
                )}
            </div>

            <div className="bordered-link">
                <Link to={`/pokePages/${65}`} className="removeStylesLink">
                    <span className="styled-span-color">&raquo;</span>
                </Link>
            </div>
        </div>
    );
};

export default BtnPages;
