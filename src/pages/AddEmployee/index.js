import React, {useEffect, useState} from "react";
import {Header, Button} from "../../components";

import "./index.scss";
import {useNavigate} from "react-router-dom";
import DepartmentService from "../../Services/DepartmentService";
import {ConstDepartment} from "../../contextApi/DepartmentContext/constans";
import {useDepartment} from "../../contextApi";
import EmployeeService from "../../Services/EmployeeService";


function AddEmployeePage() {
    const navigate = useNavigate();
    const initialData = {
        fullname: "",
        email: "",
        maritalStatus: "false",
        departmentId: "",
    }
    const [data, setData] = useState(initialData);
    const [departments, setDepartments] = useState([]);
    const {dispatch} = useDepartment();

    const onsubmit = (e) => {
        e.preventDefault();

        const preparedData = {
            ...data,
            departmentId: Number(data.departmentId),
            maritalStatus: data.maritalStatus === "true"
        }
        EmployeeService.createEmployee(preparedData)
            .then(res => {
                console.log("res", res);
                navigate("/");
            })
            .catch(err => {
                console.log("err", err);
            })
    }

    const setState = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    useEffect(() => {
        ;(async () => {
            // set all Departments
            const departments = await DepartmentService.getDepartment();
            dispatch({type: ConstDepartment.SET_DEPARTMENT, payload: {departments}});
            setDepartments(departments);
            if (departments.length > 0) {
                setState({target: {name: "departmentId", value: departments[0].id.toString()}});
            }

        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            <Header title="New Employee "/>
            <br/>
            <form className="create-form" onSubmit={onsubmit}>
                <label>
                    <span>Ad</span>
                    <input type="text" name="fullname" onChange={setState} required/>
                </label>

                <label>
                    <span>Email</span>
                    <input type="email" name="email" onChange={setState} required/>
                </label>

                <label>
                    <span>Medeni Durum</span>
                    <select name="maritalStatus" onChange={setState} required>
                        <option value="false">Bekar</option>
                        <option value="true">Evli</option>
                    </select>
                </label>

                <label>
                    <span>Departman</span>
                    <select name="departmentId" onChange={setState} required>
                        {
                            departments.map((department) => {
                                return (
                                    <option key={department.id} value={department.id}>{department.title}</option>
                                )
                            })
                        }
                    </select>
                </label>


                <div className="buttons">
                    <Button type="button" onClick={() => {
                        navigate(-1);
                    }}>Vazgeç</Button>
                    <Button type="submit">Gönder</Button>
                </div>
            </form>
        </div>
    );
}

export default AddEmployeePage;
