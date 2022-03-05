import * as React from 'react'
import {initialState} from "./state";
import { ConstDepartment} from "./constans";


const AuthStateContext = React.createContext(null)

function departmentReducer(state, action) {
    switch (action.type) {
        case ConstDepartment.SET_DEPARTMENT: {
            return {
                departments: action?.payload?.departments,
            }
        }
        default: {
            return state
        }
    }
}

function DepartmentProvider({ children }) {
    const initialValue = {};
    // noinspection JSCheckFunctionSignatures
    const [state, dispatch] = React.useReducer(departmentReducer, initialValue)
    const value = { state, dispatch };

    return (
        <AuthStateContext.Provider value={value}>
            {children}
        </AuthStateContext.Provider>
    )
}

function useDepartment() {
    const context = React.useContext(AuthStateContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

export { DepartmentProvider, useDepartment }