import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RouteNames from "./helpers/RouteNames";

import {ProvideCombinedContext} from "./contextApi/ProvideCombinedContext";

import ListPage from "./pages/ListPage";
import AddEmployee from "./pages/AddEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";

import "./App.css";
function App() {
    return (
        <ProvideCombinedContext>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path={RouteNames.list} element={<ListPage />} exact />
                        <Route path={RouteNames.addEmployee} element={<AddEmployee />}  />
                        <Route path={RouteNames.editEmployee} element={<UpdateEmployee />}  />

                        <Route
                            path="*"
                            element={<Navigate to={RouteNames.list} replace />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </ProvideCombinedContext>
    );
}

export default App;