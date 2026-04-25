import React,{useEffect} from 'react'
import { useFormik } from 'formik';
import { useAddTodosMutation, useGetTodosQuery, useLazyGetTodosQuery } from '../../services/todos';
import Todo from '../Todo/Todo';

const Todos = () => {
    var [addtodo] = useAddTodosMutation();
    // var { isLoading: todosloading, data: todos, refetch } = useGetTodosQuery();
    var [latesttodos, { data: todos, isLoading }] = useLazyGetTodosQuery();

    useEffect(() => {
        latesttodos();  
    }, [])

    const form = useFormik({
        initialValues: {
            todos: "",
            status: false
        },
        onSubmit: (values, { resetForm }) => {
            addtodo(values).then(() => {
                latesttodos()
            })
        }
    })

    return (
        <div>
            <form onSubmit={form.handleSubmit}>
                <input type="text" id='todos' {...form.getFieldProps("todos")} />
                <button type='submit'>ADD</button>
            </form>
            <ul>
                {todos ?
                    (todos.map((onetodo, i) => {
                        return <Todo data={onetodo.todos} key={i} />
                    }))
                    : (<h1>loading</h1>)}
            </ul>
        </div>
    )
}

export default Todos
