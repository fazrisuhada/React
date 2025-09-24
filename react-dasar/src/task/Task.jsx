import { useImmer } from "use-immer";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

export default function Task() {
  const [items, setItems] = useImmer([]);

  return (
    <div>
      <TaskForm setItems={setItems} />
      <TaskList items={items} />
    </div>
  );
}
