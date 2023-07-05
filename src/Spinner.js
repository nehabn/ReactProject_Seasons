import React from 'react';

const Spinner =(props) =>{
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

// if one forgets to write a message , then we can have this to gie a default message.
Spinner.defaultProps ={
    message: "Loading..."
};
//to overridde this, one should actually give a message while calliing Spinner.


export default Spinner;