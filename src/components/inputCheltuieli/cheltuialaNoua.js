import React from 'react';
import "./cheltuialaNoua.css";

import Form from "./form";


const cheltuialaNoua = () =>{
const saveInputItemHandler = (inputItem) => {
    const item = {
        ...inputItem,
        id: Math.random().toString(),
    };

    console.log(item);
};

return(
<div className="new-expense">
    <Form saveInputItem={saveInputItemHandler}/>
</div>
);
};
export default cheltuialaNoua;