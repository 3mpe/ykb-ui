import React, {useEffect, useState} from "react";
import EmployeService from "../../Services/EmployeService";
import DepartmentService from "../../Services/DepartmentService";

import List from "./../../components/List";

function ListPage() {
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

    const headers = ["Ad", "Email", "Medeni Durum", "Departman", "Güncelleme", "Sil"];
    return (
        <header className="header">
            <List headers={headers} data={data} />
        </header>
    );
}

export default ListPage;
