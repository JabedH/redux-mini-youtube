import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
   tags:[],
   search:'',
   authors:[],
 
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
        authorSelected:(state,action)=>{
            state.authors = action.payload
        },
        authorRemoved:(state,action)=>{
            const indexToRemove = state.authors.indexOf(action.payload)

            if(indexToRemove !== -1){
                state.authors.splice(indexToRemove,1)
            }
        },

        // authorSelected:(state,action)=>{
        //     state.authors = action.payload
        // },
        // authorRemoved:(state,action)=>{
        //     if(state.authors !== null){
        //         state.authors = null
        //     }
        // },
        
        searched:(state,action)=>{
            state.search = action.payload
        },
        clear:(state,action)=>{
            if(state.search !== ''){
                state.search = ''
            }
            if(state.authors !==[]){
                state.authors =[]
            }
            if(state.tags !==[]){
                state.tags =[]
            }
            
        },
        
    }
})
export default filterVideo.reducer;
export const {tagSelected,tagRemoved,searched,authorSelected,authorRemoved,clear } = filterVideo.actions