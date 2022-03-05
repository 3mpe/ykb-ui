export function classNames(classes) {
    return Object.entries(classes)
        .filter(([key, value]) => value)
        .map(([key, value]) => key)
        .join(' ');
}



export function findDepartment (departments, id) {
    const department = departments.find(department => department.id === id);
    return department ? department.title : "Kayıtlı değil";
}


export function findMaritalStatus (status) {
    const maritalStatus = {
        [true]: "Evli",
        [false]: "Bekar"
    };

    return maritalStatus[status];
}