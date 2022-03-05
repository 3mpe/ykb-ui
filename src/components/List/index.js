import React from "react";
import ListItem from "../ListItem";

function List(props) {
    const { headers = [], data = [], onClickUpdate, onClickDelete } = props;
    return (
        <table border={2} cellPadding={10}>
            <tbody>
                <tr>
                    {
                        headers.map((header, index) => {
                            return <th key={index}>{header}</th>
                        })
                    }
                </tr>

                {data && data.map((item, index) => {
                    return (
                        <ListItem item={item} key={index} onClickUpdate={onClickUpdate} onClickDelete={onClickDelete} />
                    )
                })}

            </tbody>
        </table>
    );
}

export default List;
