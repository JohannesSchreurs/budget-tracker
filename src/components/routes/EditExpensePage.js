import React from 'react';

const EditExpensePage = (props) => {
    return (
        <div>
            <p>This is from the edit page</p>
            <p>Chosen id was: {props.match.params.id || "No ID given"}</p>
        </div>
    );
}

export default EditExpensePage;