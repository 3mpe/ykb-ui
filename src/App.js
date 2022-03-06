import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteNames from "./helpers/RouteNames";

import {ProvideCombinedContext} from "./contextApi/ProvideCombinedContext";

import ListPage from "./pages/ListPage";
import AddEmployee from "./pages/AddEmployee";

import "./App.css";
function App() {
    return (
        <ProvideCombinedContext>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path={RouteNames.list} element={<ListPage />} exact />
                        <Route path={RouteNames.addEmployee} element={<AddEmployee />}  />
                    </Routes>
                </BrowserRouter>
            </div>
        </ProvideCombinedContext>
    );
}

export default App;