import { ref, remove } from "firebase/database";
import React from "react";
import { db } from "../../utils/firebaseConfig";

function DoneCard({task}) {

    const {assignment, assigned, category} = task;
    
    function handleClick(){
        const taskRef = ref(db, "/assignments/" + task.taskId);
        remove(taskRef);
    }

    return (
        <div className={category}>
            <h3>{assignment}</h3>
            <h4>{category}</h4>
            <p>-{assigned}</p>
            <button onClick={handleClick}>Remove</button>
        </div>
    );
}

export default DoneCard;