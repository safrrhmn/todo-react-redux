import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { removeTodo, completeTodo } from "./actions";
import { connect } from "react-redux";
import { displayAlert, loadTodos } from "./thunk";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onDisplayAlertClick,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMesssage = <div>Loading...</div>;
  const content = (
    <div className="todo-wrapper">
      <NewTodoForm />
      {todos.map((todo, key) => (
        <TodoListItem
          key={key}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onDisplayAlertClick}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMesssage : content;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(completeTodo(text)),
  onDisplayAlertClick: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
