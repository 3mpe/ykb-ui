import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


import EmployeeService from "../../Services/EmployeeService";
import DepartmentService from "../../Services/DepartmentService";

import {useDepartment} from "../../contextApi";
import {ConstDepartment} from "../../contextApi/DepartmentContext/constans";

import RouteNames from "../../helpers/RouteNames";

import {Header, List} from "../../components";

function ListPage() {
    const [data, setData] = useState(null);
    const {dispatch} = useDepartment();
    let navigate = useNavigate();


    useEffect(() => {
        ;(async () => {
            // set all Departments
            const departments = await DepartmentService.getDepartment();
            dispatch({type: ConstDepartment.SET_DEPARTMENT, payload: {departments}});

            // set all Employes
            const employs = await EmployeeService.getEmployees();
            setData(employs);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addEmployee = () => {
        navigate(RouteNames.addEmployee);
    };

    const onClickUpdate = (item) => {
        navigate(RouteNames.editEmployee, { state: item });
    }
    const onClickDelete = (item) => {
        EmployeeService.deleteEmployee(item.id)
            .then(() => {
                setData(data.filter(i => i.id !== item.id));
            });
    }

    const headers = ["Ad", "Email", "Medeni Durum", "Departman", "Güncelleme", "Sil"];
    return (
        <div>
            <Header title="UI Development Challenge" onClickAddEmployee={addEmployee}/>
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
