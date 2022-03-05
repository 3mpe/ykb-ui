import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {ProvideCombinedContext} from "./contextApi/ProvideCombinedContext";
import {Header} from "./components";

import RouteNames from "./helpers/RouteNames";

import "./App.css";
import ListPage from "./pages/ListPage";

function App() {
    return (
        <ProvideCombinedContext>
            <div className="App">
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path={RouteNames.list} render={(props) => <ListPage {...props} />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </ProvideCombinedContext>
    );
}

export default App;