import React from "react";
import Button from "../Button";

function Header(props) {
    const { onClickAddEmployee } = props;
    return (
        <header className="header">
            <h3>UI Development Challenge</h3>
            <Button onClick={onClickAddEmployee}>
                New Employee
            </Button>
        </header>
    );
}

export default Header;
