
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetch = createAsyncThunk(
    'fetch',
    async (obj, thunk) => {
        console.log('calling fetch...', obj.id)
        const res = await fetch('http://jsonplaceholder.typicode.com/todos/1')
        console.log(res)
        console.log(thunk)
        return await res.json()
    }
)

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        loading: 'null',
        data: {}
    },
    reducers:{
        update: () => {

        }
    },
    extraReducers:{
        [fetch.pending]: (state, action) => {
            state.loading = 'loading'
        },

        [fetch.fulfilled]: (state, action) => {
            state.loading = 'success'
            state.data = action.payload
        },

        [fetch.rejected]: (state) => {
            state.loading = 'failed'
        }
    }
})

export const { update } = rootSlice.actions

export default rootSlice.reducer

