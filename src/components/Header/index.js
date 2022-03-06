import React from "react";
import Button from "../Button";

function Header(props) {
    const {title, onClickAddEmployee} = props;
    return (
        <header className="header">
            <h3>{title}</h3>
            {
                onClickAddEmployee && (
                    <Button onClick={onClickAddEmployee}>
                        New Employee
                    </Button>
                )
            }

        </header>
    );
}

export default Header;
