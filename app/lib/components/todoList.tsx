import { useState, useEffect, useContext } from "react";
import { Ellipsis } from "lucide-react";
import { Link } from "@remix-run/react";
import { Trash2, CircleCheck, Undo2 } from "lucide-react";
import { CustomAlertDialogDemo } from "./alertDialog";
import { useToast } from "@/components/ui/use-toast";
import { useTodosContext } from "@/useContext/to-do-context";
import TodosContextProvider from "@/useContext/to-do-context";

const TodoList = ({ status }: { status: string }) => {
  // const [todos, setTodos] = useState([
  //   { id: 1, title: "Sample Task 1", status: "1" },
  //   { id: 2, title: "Sample Task 2", status: "2" },
  //   { id: 3, title: "Sample Task 3", status: "1" },
  // ]);

  const { todos, setTodos } = useTodosContext();

  //<TodoList>
  //<p>Hello world</p>

  //function createTask () { setTodos(.)}

  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    setLoading(false); // You might want to set it true initially and then fetch data to show loading indicator
  }, []);

  const filteredTodos = todos.filter((todo) => todo.status === status);

  const totalNumber = filteredTodos.length;

  const handleDelete = (index: any) => {
    setTodos(todos.filter((a) => a.id !== index.id));
    setLoading(false);
    toast({
      title: "LEZGOOOOOOOOOOOOO!!!🥳🎉",
      description: "You have finished a task",
      duration: 2800,
    });
  };

  // const handleFinish = (todoID: number) => {
  //   // setTodos(todos.map((a) => a.id !== index.id));

  //   const newTodos = todos.map((todo) => {
  //     if ((todo.id = todoID)) {
  //       return {
  //         ...todo,
  //         status: "2",
  //       };
  //     } else {
  //       return newTodos;
  //     }
  //   });

  //   // console.log(newTodos);
  //   // setTodos(newTodos);
  //   setLoading(false);
  //   toast({
  //     title: "LEZGOOOOOOOOOOOOO!!!🥳🎉",
  //     description: "You have finished a task",
  //     duration: 2800,
  //   });
  // };

  const handleFinish = (todoID: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoID) {
        return {
          ...todo,
          status: "2",
        };
      }
      return todo;
    });

    setTodos(updatedTodos);

    setLoading(false);
    toast({
      title: "LEZGOOOOOOOOOOOOO!!!🥳🎉",
      description: "You have finished a task",
      duration: 2800,
    });
  };

  const handleUnFinish = (todoID: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoID) {
        return {
          ...todo,
          status: "1",
        };
      }
      return todo;
    });

    setTodos(updatedTodos);

    setLoading(false);
    toast({
      title: "TASK TRANSFERED 😉",
      description: "Task transferred to To-do",
      duration: 2800,
    });
  };

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center h-80">
          <Ellipsis />
        </div>
      )}

      {!loading && (
        <div>
          {status === "1" && totalNumber === 0 && (
            <div className="h-96 flex flex-col justify-center items-center">
              <p className="font-medium text-lg my-5 text-center text-gray-600">
                <span className="text-4xl text-red-900">START</span> <br />{" "}
                Making Tasks
              </p>
              <div className="bg-red-400 w-32 h-10 items-center flex justify-center rounded-full text-white shadow-lg">
                <Link to={"/create"}>Create Task!</Link>
              </div>
            </div>
          )}
          {totalNumber > 0 && status === "1" && (
            <p className="font-medium text-sm my-5">
              You have {totalNumber}
              <span className="font-bold text-2xl text-red-900"> PENDING </span>
              task(s)
            </p>
          )}
          {status === "2" && totalNumber === 0 && (
            <div className="h-96 flex flex-col justify-center items-center">
              <p className="font-medium text-lg my-5 text-center text-gray-600">
                <span className="text-4xl text-green-900">STOP</span> <br />{" "}
                Procrastinating
              </p>
            </div>
          )}
          {status === "2" && totalNumber > 0 && (
            <p className="font-medium my-5 ">
              <span className=" text-2xl text-green-900">Congratulations</span>
              <br />
              you have finished {totalNumber} task(s)!!!
            </p>
          )}

          {filteredTodos.map((todo) => (
            <li key={todo.id} className="list-none">
              <ul className="flex flex-col my-3 h-20 justify-center items-center bg-white rounded-md shadow-[2px_2px_3px_1px_rgba(0,0,0,0.3)]">
                <div className="flex flex-row w-80 font-semibold justify-between place-items-center">
                  <div className="w-56">
                    <p> {todo.title}</p>
                  </div>
                  <div className="flex flex-row justify-between items-center w-16">
                    {status === "1" && (
                      <CircleCheck
                        onClick={() => {
                          handleFinish(todo.id);
                        }}
                        className="text-green-600 hover:text-green-700 cursor-pointer"
                      />
                    )}
                    {status === "2" && (
                      <Undo2
                        onClick={() => {
                          handleUnFinish(todo.id);
                        }}
                        className="text-blue-600 hover:text-blue-700 cursor-pointer"
                      />
                    )}
                    <button>
                      <CustomAlertDialogDemo
                        icon={
                          <Trash2 className="text-red-600 hover:text-red-700 cursor-pointer" />
                        }
                        effect={() => handleDelete(todo)}
                      />
                    </button>
                  </div>
                </div>
              </ul>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
