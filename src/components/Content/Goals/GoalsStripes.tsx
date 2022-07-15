import React from 'react';
import GoalsStripe from "./GoalsStripe";
import Break from "../Helpers/Break";

function GoalsStripes() {
    return (
        <>
            <div className="goalsStripesContainer">
                <GoalsStripe circle={true} number={1} text={"Angol tanulás"}/>
                <GoalsStripe circle={false} text={"Magántanár"}/>
                <GoalsStripe circle={false} text={"Nyelvvizsga"}/>
                <Break/>
                <GoalsStripe circle={true} number={2} text={"Jogosítvány"}/>
                <GoalsStripe circle={false} text={"Tanfolyam"}/>
                <GoalsStripe circle={false} text={"Vizsga"}/>
                <Break/>
                <GoalsStripe circle={true} number={3} text={"React"}/>
                <GoalsStripe circle={false} text={"Tanfolyam"}/>
                <GoalsStripe circle={false} text={"Vizsga"}/>
                <GoalsStripe circle={false} text={"Demo projekt"}/>
                <GoalsStripe circle={false} text={"Felvételi"}/>
                <Break/>
                <GoalsStripe circle={true} number={4} text={"Biciklis edzés"}/>
                <GoalsStripe circle={false} text={"20 Km/h áltag elérése"}/>
                <Break/>
                <GoalsStripe circle={true} number={5} text={"Futás edzés"}/>
                <GoalsStripe circle={false} text={"8 perc/km alá menni"}/>
                <GoalsStripe circle={false} text={"7 perc/km alá menni"}/>
            </div>
        </>
    );
}

export default GoalsStripes;