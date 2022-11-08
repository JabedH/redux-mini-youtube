import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchIcon from "../../assets/search.svg";
import { searched } from '../../features/filter/filterSlice';
import {useMatch, useNavigate} from "react-router-dom"
const Search = () => {
    const{search} = useSelector(state => state.filter)
    const [input, setInput] = useState(search)
    const dispatch = useDispatch()

    const match = useMatch('/')
    const navigate = useNavigate()
    

    const handleSearch =(e)=>{
      e.preventDefault()
        dispatch(searched(input))
        if(!match){
          navigate('/')
        }
    }
    return (
        <form onSubmit={handleSearch} className="flex  rounded-full">
            <div class="border flex items-center bg-white  rounded-l-full  ">
              <input
                class=" none  outline-none border-none h-11 px-5 w-[500px] rounded-l-full focus:ring-1 focus:ring-black-500 text-base"
                type="search"
                name="search"
                value={input}
                placeholder="Search"
                onChange={(e)=> setInput(e.target.value)}
              />
            </div>
            <button type='submit' className="bg-gray-100  px-3 rounded-r-full">
              <img
                class="inline h-6 px-2 cursor-pointer "
                src={searchIcon}
                alt="Search"
              />
            </button>
          </form>
    );
};

export default Search;