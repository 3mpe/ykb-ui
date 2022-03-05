
import Api from "./Api";

class DepartmentService {

    getDepartment() {
        return Api.get("/departments");
    }
}

export default new DepartmentService();
