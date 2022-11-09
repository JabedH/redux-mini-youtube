import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
   tags:[],
   search:'',
   authors:"",
};
const filterVideo = createSlice({
    name: 'video',
    initialState,
    reducers:{
        tagSelected:(state,action)=>{
            state.tags.push(action.payload)
        },
        tagRemoved:(state,action)=>{
            const indexToRemove = state.tags.indexOf(action.payload)

            if(indexToRemove !== -1){
                state.tags.splice(indexToRemove,1)
            }
        },
        // authorSelected:(state,action)=>{
        //     state.authors.push(action.payload)
        // },
        // authorRemoved:(state,action)=>{
        //     const indexToRemove = state.authors.indexOf(action.payload)

        //     if(indexToRemove !== -1){
        //         state.authors.splice(indexToRemove,1)
        //     }
        // },
        searched:(state,action)=>{
            state.search = action.payload
        },
        getAuthor:(state,action)=>{
            state.authors = action.payload
        }
    }
})
export default filterVideo.reducer;
export const {tagSelected,tagRemoved,searched,getAuthor } = filterVideo.actions