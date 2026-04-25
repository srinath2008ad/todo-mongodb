// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => {
                return {
                    url: "/gettodos",
                    method: "GET"
                }
            },
        }),
        addTodos: builder.mutation({
            query: (todo) => {
                return {
                    url: "/addtodos",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(todo)
                }
            }
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery,useLazyGetTodosQuery, useAddTodosMutation } = todosApi