import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld } from "./HelloWorld";
import Container from "./Container";
import TodoList from "../todo-list/TodoList";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import Counter from "../form/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <AlertButton text={"click me"} message={"Selamat Datang"} />
      <MyButton
        text={"click me"}
        onSmash={() => alert("Semoga Harimu Menyenangkan")}
      />

      <Toolbar onClick={(e) =>{
        e.stopPropagation()
        alert("you are clik toolbar.")
      }}/>
      
      <SearchForm/>

      <Counter />
    </Container>
  </StrictMode>
);
