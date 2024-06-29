import BasicInfo from "../components/BasicInfo";
import { useParams } from "react-router-dom";
import { PokeHeader } from "../components/PokeHeader";
import Footer from "../components/Footer";
import BtnPages from "../components/BtnPages";

export const PokePages = () => {
    const { id } = useParams()
    
    return (
        <>
            <div className="pokeMainPagination">
                <PokeHeader />
                <BasicInfo id={+(id)} />
                <BtnPages 
                    id={+(id)}
                />
                <Footer />
            </div>
            
        </>
    )
}

export default PokePages