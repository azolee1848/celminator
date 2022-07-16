import React from 'react';
import concave from '../../../images/concave_subtract.svg';
import GoalsStripeProps from "../../../Interfaces/GoalsStripeProps";

function GoalsStripe(GoalsStripeProps: GoalsStripeProps) {

    const circle = GoalsStripeProps.circle;
    const number = GoalsStripeProps.number;
    const text = GoalsStripeProps.text;

    return (
        <>
            <div className="goalsStripeContainer">
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