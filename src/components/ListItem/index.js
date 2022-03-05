import React from "react";
import Button from "../Button";
import {findDepartment, findMaritalStatus} from "../../helpers/utils";
import {useDepartment} from "../../contextApi";

function ListItem(props) {
    const { item, onClickUpdate, onClickDelete } = props;
    const { state } = useDepartment();

    return (
        <tr>
            <td>{item.fullname}</td>
            <td>{item.email}</td>
            <td>{findMaritalStatus(item.maritalStatus)}</td>
            <td>{findDepartment(state.departments, item.departmentId)}</td>
            <td>
                <Button onClick={() => { onClickUpdate(item) }}>Güncelle</Button>
            </td>
            <td>
                <Button onClick={() => { onClickDelete(item) }}>Sil</Button>
            </td>
        </tr>
    );
}

export default ListItem;
