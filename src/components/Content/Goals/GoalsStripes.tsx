import React from 'react';
import GoalsStripe from "./GoalsStripe";

function GoalsStripes() {
    return (
        <div className="d-flex flex-column">
            <div className="d-flex"><GoalsStripe/></div>
            <div className="d-flex"><GoalsStripe/></div>
            <div className="d-flex"><GoalsStripe/></div>
            <div className="d-flex"><GoalsStripe/></div>
        </div>
    );
}

export default GoalsStripes;