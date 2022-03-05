import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteNames from "./helpers/RouteNames";


import {ProvideCombinedContext} from "./contextApi/ProvideCombinedContext";
import {Header} from "./components";

import ListPage from "./pages/ListPage";

import "./App.css";
function App() {
    return (
        <ProvideCombinedContext>
            <div className="App">
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path={RouteNames.list} element={<ListPage/>} exact />
                    </Routes>
                </BrowserRouter>
            </div>
        </ProvideCombinedContext>
    );
}

export default App;