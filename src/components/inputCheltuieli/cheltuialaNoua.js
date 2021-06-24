import React from 'react';
import "./cheltuialaNoua.css";

import Form from "./form";


const cheltuialaNoua = (props) =>{
const saveInputItemHandler = (inputItem) => {
    const item = {
        ...inputItem,
        id: Math.random().toString(),
    };
    props.addItem(item);
};

return(
<div className="new-expense">
    <Form saveInputItem={saveInputItemHandler}/>
</div>
);
};
export default cheltuialaNoua;