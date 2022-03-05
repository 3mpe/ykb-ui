import Api from "./Api";

class EmployeService {


    getEmployees() {
        return Api.get("/employees");
    }

    getEmployeDetail(id) {
        return Api.get(`/employees/${id}`);
    }

    createEmploye(data) {
        return Api.post("/employees", data);
    }

    updateEmploye(id, data) {
        return Api.put(`/employees/${id}`, data);
    }

    deleteEmploye(id) {
        return Api.delete(`/employees/${id}`);
    }
}

export default new EmployeService();
