import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomeList} from "./HomeList";

export const RootRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeList/>} />
            </Routes>
        </BrowserRouter>
    )
}
