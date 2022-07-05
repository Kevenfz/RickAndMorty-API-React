import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Infos from "./components/infos/info"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/info/:id" element={<Infos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router