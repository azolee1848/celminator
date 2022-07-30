import React from 'react';
import concave from '../../../images/concave_subtract.svg';
import GoalsStripeProps from "../../../Interfaces/GoalsStripeProps";

function GoalsStripe({circle, number, text, onAddFunction /* onEditFunction, onDeleteFunction */}: GoalsStripeProps) {

    return (
        <>
            <div className="goalsStripeContainer" onClick={onAddFunction}>
                { circle &&
                    (<div className="goalsStripeOuterCircle">
                    <div className="goalsStripeInnerCircle">
                        <span className="goalsStripeInnerNumber">{number}</span>
                    </div>
                    </div>)
                }
                <img className={circle ? "goalsStripeHeadConcaveGraphic" : "goalsStripeConcaveGraphic"} src={concave} alt=""/>
                <div className={circle ? "goalsStripeContent goalsStripeHead" : "goalsStripeContent"}>
                    <span className="goalsStripeText">{text}</span>
                </div>
            </div>
        </>
    );
}

export default GoalsStripe;