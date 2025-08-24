import { createContext } from "react";
import { useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({children}){
    const [addTodo,setAddTodo] = useState({});
    return(
        <TodoContext.Provider value={{addTodo,setAddTodo}}>
            {children}
        </TodoContext.Provider>
    )

}