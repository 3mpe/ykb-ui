import React, {useEffect, useState} from "react";
import EmployeService from "../../Services/EmployeService";
import DepartmentService from "../../Services/DepartmentService";

import { findDepartment, findMaritalStatus } from "../../helpers/utils";

function ListPage() {
    console.log("ListPage");
    const [data, setData] = useState(null);
    const [departments, setDepartments] = useState(null);

    useEffect(() => {
        ;(async () => {
            // set all Departments
            const departments = await DepartmentService.getDepartment();
            setDepartments(departments);

            // set all Employes
            const employs = await EmployeService.getEmployees();
            setData(employs);
        })();
    }, []);




    return (
        <header className="header">
            <table>
                <tbody>
                    <tr>
                        <th>Ad</th>
                        <th>Email</th>
                        <th>Medeni Durum</th>
                        <th>Departman</th>
                        <th>Güncelle</th>
                        <th>Sil</th>
                    </tr>

                    {data && data.map((employe, index) => {
                        return (
                            <tr key={index}>
                                <td>{employe.fullname}</td>
                                <td>{employe.email}</td>
                                <td>{ findMaritalStatus(employe.maritalStatus) }</td>
                                <td>{ findDepartment(departments, employe.departmentId) }</td>
                                <td>
                                    <button>Güncelle</button>
                                </td>
                                <td>
                                    <button>Sil</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </header>
    );
}

export default ListPage;
