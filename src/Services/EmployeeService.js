import Api from "./Api";

class EmployeeService {


    getEmployees() {
        return Api.get("/employees");
    }

    getEmployeDetail(id) {
        return Api.get(`/employees/${id}`);
    }

    createEmployee(data) {
        return Api.post("/employees", data);
    }

    updateEmployee(id, data) {
        return Api.put(`/employees/${id}`, data);
    }

    deleteEmployee(id) {
        return Api.delete(`/employees/${id}`);
    }
}

export default new EmployeeService();
