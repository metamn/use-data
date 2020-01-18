import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useSWR from "swr";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Without fetcher the data is undefined
 */
const fetcher = url => fetch(url).then(response => response.json());

/**
 * Displays the component
 */
const JsonPl2 = props => {
  const [login, setLogin] = useState("...");
  const [todo, setTodo] = useState("...");

  const { data: loginData, error: loginError } = useSWR(
    "http://api.finsterdata.com/v1/login",
    fetcher
  );

  useEffect(() => {
    if (loginError) setLogin(JSON.stringify(loginError));
    if (!loginData) setLogin("Loading....");
    setLogin(JSON.stringify(loginData));
  }, [loginData, loginError]);

  const { data: todoData, error: todoError } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetcher
  );

  useEffect(() => {
    if (todoError) setTodo(JSON.stringify(todoError));
    if (!todoData) setTodo("Loading....");
    setTodo(JSON.stringify(todoData));
  }, [todoData, todoError]);

  return (
    <div className="JsonPl2">
      <br />
      <hr />
      <br />
      <h3>SWR playgound</h3>
      <h4>Login</h4>
      <p>{login}</p>
      <h4>Todo</h4>
      <p>{todo}</p>
      <br />
      <hr />
      <br />
    </div>
  );
};

JsonPl2.propTypes = propTypes;
JsonPl2.defaultProps = defaultProps;

export default JsonPl2;
export { propTypes as JsonPl2PropTypes, defaultProps as JsonPl2DefaultProps };
