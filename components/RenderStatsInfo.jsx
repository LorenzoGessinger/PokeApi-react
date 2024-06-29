import { useState } from "react";

const RenderStatsInfo = ({ pokemonDetails }) => {

  const [showStatus, setShowStatus] = useState(false);

  const checkStatusBtn = () => {
    setShowStatus((prevShowStatus) => !prevShowStatus)

  }

  return (
    <div>
      <button onClick={checkStatusBtn} className="checkPokeStatusBtn">
        Check Status
      </button>
  
      {showStatus && (
        <div className="adjustPokeStatusInfoBtn">
          <>
            {pokemonDetails.stats?.map(({ name, base_stat }) => (
              <span key={name}>
                {name} : {base_stat}
              </span>
            ))}
          </>
        </div>
      )}
    </div>
  );
  
}

export default RenderStatsInfo