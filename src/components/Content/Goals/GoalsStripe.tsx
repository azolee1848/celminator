import React from 'react';
import concave from '../../../images/concave_subtract.svg';
import GoalsStripeProps from "../../../Interfaces/GoalsStripeProps";

function GoalsStripe(GoalsStripeProps: GoalsStripeProps) {

    const circle = GoalsStripeProps.circle;
    const number = GoalsStripeProps.number;
    const text = GoalsStripeProps.text;

    return (
        <>
            <div className="goalStripeContainer">
                { circle &&
                    (<div className="goalStripeOuterCircle">
                    <div className="goalStripeInnerCircle">
                        <span className="goalStripeInnerNumber">{number}</span>
                    </div>
                    </div>)
                }
                <img className={circle ? "goalStripeHeadConcaveGraphic" : "goalStripeConcaveGraphic"} src={concave} alt=""/>
                <div className={circle ? "goalStripeContent goalStripeHead" : "goalStripeContent"}>
                    <span className="goalStripeText">{text}</span>
                </div>
            </div>
        </>
    );
}

export default GoalsStripe;