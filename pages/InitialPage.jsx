import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { PokeHeader } from "../components/PokeHeader";

function InitialPage() {

    return (
        <div>
            <div className="pokeMainPagination">
                <PokeHeader />
                <div className="style-headings">
                    <h2>Welcome to my Pokemon API consumption project</h2>
                    <h3>Here you are about to find every pokemon from every generation!</h3>
                    <img src="../img/pikachu.png" alt="Img of Pikachu Smiling"/>
                    <h3>Since the oldest ones until the newest ones down below</h3>
                    <br />
                    <Link to="/pokePages/1" className="capitalLink">PokePages</Link>
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default InitialPage;
