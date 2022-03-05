import * as React from 'react';
import { DepartmentProvider } from './DepartmentContext';

export function ProvideCombinedContext({ children }) {
    return(
        <DepartmentProvider>
            {children}
        </DepartmentProvider>
    )
}