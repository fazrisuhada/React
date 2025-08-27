import Todo from "./Todo";

export default function TodoList() {
  const datas = [
    {
      id: 0,
      text: "Learn HTML",
      isCompleted: true
    },
    {
      id: 1,
      text: "Learn CSS",
      isCompleted: true
    },
    {
      id: 2,
      text: "Learn JS",
      isCompleted: true
    },
    {
      id: 3,
      text: "Learn React",
      isCompleted: false
    },
  ];

  return (
    <div>
      <h1>Todo Lists</h1>
      <ul>
        {
            datas.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))
        }
      </ul>
    </div>
  );
}
