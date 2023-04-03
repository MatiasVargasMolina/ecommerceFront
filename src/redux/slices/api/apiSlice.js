import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const apiSlice=createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
    }),
    endpoints:(builder)=>({
        createTask: builder.mutation({
            query:(newTask)=>({
                url:"/api/auth/signin",
                method:"Post",
                body:newTask,
                credentials: "include"
            })
        }),
        createLogout: builder.mutation({
            query:()=>({
                url:"api/auth/signout",
                method:"Post",
                body:{},
                credentials: "include"
            })
        }),
    })
})
export const {useCreateTaskMutation,useCreateLogoutMutation} = apiSlice;