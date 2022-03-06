import React, {useEffect, useState} from "react";
import {Header, Button} from "../../components";

import "./index.scss";
import {useNavigate} from "react-router-dom";
import DepartmentService from "../../Services/DepartmentService";
import {ConstDepartment} from "../../contextApi/DepartmentContext/constans";
import {useDepartment} from "../../contextApi";


function AddEmployeePage() {
    const navigate = useNavigate();
    const initialData = {
        name: "",
        email: "",
        martialStatus: "true",
        departments: "",
    }
    const [data, setData] = useState(initialData);
    const [departments, setDepartments] = useState([]);
    const { dispatch } = useDepartment();

    const onsubmit = (e) => {
        e.preventDefault();
        console.log("Clicked", data);
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
            dispatch({ type: ConstDepartment.SET_DEPARTMENT, payload: { departments } });
            setDepartments(departments);
            if (departments.length > 0) {
                setState({ target: { name: "departments",  value: departments[0].id.toString() } });
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
                    <input type="text" name="name" onChange={setState} required/>
                </label>

                <label>
                    <span>Email</span>
                    <input type="email" name="email" onChange={setState} required/>
                </label>

                <label>
                    <span>Medeni Durum</span>
                    <select name="martialStatus" onChange={setState} required>
                        <option value="true">Single</option>
                        <option value="false">Married</option>
                    </select>
                </label>

                <label>
                    <span>Departman</span>
                    <select name="departments" onChange={setState} required>
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
                    <Button type="button" onClick={() => { navigate(-1); }}>Vazgeç</Button>
                    <Button type="submit">Gönder</Button>
                </div>
            </form>
        </div>
    );
}

export default AddEmployeePage;
