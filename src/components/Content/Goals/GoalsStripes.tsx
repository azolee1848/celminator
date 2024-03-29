import React from 'react';
import GoalsStripe from "./GoalsStripe";
import Break from "../Helpers/Break";

function GoalsStripes() {

    function onAdd() {
        console.log("Add goal step.");
    }

    function onEdit() {
        console.log("Edit goal step.");
    }

    function onDelete() {
        console.log("Delete goal step.");
    }

    return (
        <>
            <div className="goalsStripesContainer">
                <GoalsStripe circle={true} number={1} text={"Angol tanulás"} onEditFunction={onEdit} onDeleteFunction={onDelete}/>
                <GoalsStripe circle={false} text={"Magántanár"} onEditFunction={onEdit} onDeleteFunction={onDelete}/>
                <GoalsStripe circle={false} text={"Nyelvvizsga"} onEditFunction={onEdit} onDeleteFunction={onDelete}/>
                <GoalsStripe circle={false} text={"+"} onAddFunction={onAdd}/>
                <Break/>
                <GoalsStripe circle={true} number={2} text={"Jogosítvány"} onEditFunction={onEdit} onDeleteFunction={onDelete}/>
                <GoalsStripe circle={false} text={"Tanfolyam"} onEditFunction={onEdit} onDeleteFunction={onDelete}/>
                <GoalsStripe circle={false} text={"Vizsga"} onEditFunction={onEdit} onDeleteFunction={onDelete}/>
                <GoalsStripe circle={false} text={"+"} onAddFunction={onAdd}/>
                <Break/>
                <GoalsStripe circle={true} number={3} text={"React"}/>
                <GoalsStripe circle={false} text={"Tanfolyam"}/>
                <GoalsStripe circle={false} text={"Vizsga"}/>
                <GoalsStripe circle={false} text={"Demo projekt"}/>
                <GoalsStripe circle={false} text={"Felvételi"}/>
                <GoalsStripe circle={false} text={"+"} onAddFunction={onAdd}/>
                <Break/>
                <GoalsStripe circle={true} number={4} text={"Biciklis edzés"}/>
                <GoalsStripe circle={false} text={"20 Km/h áltag elérése"}/>
                <GoalsStripe circle={false} text={"+"} onAddFunction={onAdd}/>
                <Break/>
                <GoalsStripe circle={true} number={5} text={"Futás edzés"}/>
                <GoalsStripe circle={false} text={"8 perc/km alá menni"}/>
                <GoalsStripe circle={false} text={"7 perc/km alá menni"}/>
                <GoalsStripe circle={false} text={"+"} onAddFunction={onAdd}/>
            </div>
        </>
    );
}

export default GoalsStripes;