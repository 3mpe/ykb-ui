import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Icon(props) {
    const { icon, ...rest } = props;
    return (
       <FontAwesomeIcon icon={icon} {...rest} />
    );
}

export default Icon;
