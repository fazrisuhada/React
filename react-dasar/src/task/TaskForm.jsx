import { useState } from "react";
import { useImmer } from "use-immer";

export default function TaskForm() {

    const [item, setItem] = useState("")
    const [items, setItems] = useImmer([])

    function handleChange(e){
        setItem(e.target.value)
    }

    function handleClick(e){
        e.preventDefault()
        setItems((draft) => {
            draft.push(item)
        })
        setItem("")
    }

    return(
        <div>
            <h1>Create Task</h1>
            <input value={item} onChange={handleChange} type="text" placeholder="task name"/>
            <button onClick={handleClick}>Add</button>
            <h1>Task List</h1>
            <ul>
                {
                    items.map((item,index) => 
                        <li key={index}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}