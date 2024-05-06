import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type Task = {
  id: number;
  title: string;
  status: string;
};

type TodoContext = {
  todos: Task[];
  setTodos: Dispatch<SetStateAction<Task[]>>;
};

export const TodoContext = createContext<TodoContext | null>(null);

export default function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Task[]>([]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodosContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error(
      "useTodosContext must be used within a TodoContextProvider"
    );
  }
  return context;
}
