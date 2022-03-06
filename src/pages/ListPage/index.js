import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


import EmployeeService from "../../Services/EmployeeService";
import DepartmentService from "../../Services/DepartmentService";

import List from "./../../components/List";
import {useDepartment} from "../../contextApi";
import {ConstDepartment} from "../../contextApi/DepartmentContext/constans";

import RouteNames from "../../helpers/RouteNames";
import {Header} from "../../components";

function ListPage() {
    const [data, setData] = useState(null);
    const { dispatch } = useDepartment();
    let navigate = useNavigate();


    useEffect(() => {
        ;(async () => {
            // set all Departments
            const departments = await DepartmentService.getDepartment();
            dispatch({ type: ConstDepartment.SET_DEPARTMENT, payload: { departments } });

            // set all Employes
            const employs = await EmployeeService.getEmployees();
            setData(employs);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addEmployee = () => {
        console.log("addEmployee");
        navigate(RouteNames.addEmployee);
    };

    const onClickUpdate = (item) => {
        console.log("update", item);
    }
    const onClickDelete = (item) => {
        console.log("delete", item);
    }

    const headers = ["Ad", "Email", "Medeni Durum", "Departman", "Güncelleme", "Sil"];
    return (
        <div>
            <Header title="Personel Listesi" onClickAddEmployee={addEmployee} />
            <br/>
            <List
                headers={headers}
                data={data}
                onClickUpdate={onClickUpdate}
                onClickDelete={onClickDelete}
            />
        </div>
    );
}

export default ListPage;
