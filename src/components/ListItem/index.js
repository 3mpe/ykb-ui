import React from "react";
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
                <button onClick={onClickUpdate}>Güncelle</button>
            </td>
            <td>
                <button onClick={onClickDelete}>Sil</button>
            </td>
        </tr>
    );
}

export default ListItem;
