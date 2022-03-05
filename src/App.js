import React, {useEffect} from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components";

import "./App.css";
import EmployeService from "./Services/EmployeService";

function App() {

    useEffect(() => {
        (async () => {
            const employs = await EmployeService.getEmployees();
            console.log(employs);
        })();



    }, []);


    return (
        <div className="App">
            {/*<Router>*/}
                <Header/>
                {/*<div>*/}
                {/*    <Route path="/" render={(props) => null}/>*/}
                {/*    <Route path="/create" element={(props) => null}/>*/}
                {/*    <Route path="*" element={null}/>*/}
                {/*</div>*/}
            {/*</Router>*/}
        </div>
    );
}

export default App;
