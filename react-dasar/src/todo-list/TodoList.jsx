import Todo from "./Todo";

export default function TodoList() {
    return(
        <div>
            <h1>Todo Lists</h1>
            <ul>
                <Todo text="HTML"isCompleted={true} isDeleted={true}/>
                <Todo text="CSS" isCompleted={true} />
                <Todo text="JS" isCompleted={true} />
                <Todo text="React" isCompleted={false} />
            </ul>
        </div>
    )
}