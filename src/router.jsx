import { createBrowserRouter } from "react-router-dom";
import InitialPage from "../pages/InitialPage";
import PokePages from "../pages/PokePages";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
    
    {
        path: "/",
        element: <InitialPage/>
    },
    {
        path: "/pokePages/:id",
        element: <PokePages />
    },
    {
        path: "/NotFound/",
        element: <NotFound />
    }
])

export default router