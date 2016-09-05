import React, { PropTypes } from 'react';
import Todo from './Todo';
import CreateTodo from './CreateTodo';

const Todos = ({ todos, createTodo }) =>
    <div className="todos">
        <CreateTodo onCreate={createTodo} />
        { todos.map(t => <Todo key={t.updated_at} {...t} />) }
    </div>;

Todos.propTypes = {
    todos: PropTypes.array,
    createTodo: PropTypes.func
};

export default Todos;