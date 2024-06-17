import React, { useReducer,useEffect } from 'react'
import { useContext } from 'react';
import  reducer  from './reducer';
// context creation 
const AppContext = React.createContext();

// search hacker news api
let API = "http://hn.algolia.com/api/v1/search?";

const initialState ={
  isLoading: true,
  query: 'HTML',
  nbPages:0,
  page:0,
  hits:[],
};

// Provider
 const AppProvider = ({children}) => {

  //  const [state,setState] = useState(initialState);

   const [state, dispatch] = useReducer(reducer,initialState);

   const fetchApiData = async (url) => {
    dispatch({ type:'SET_LOADING' })
    
    try{
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          dispatch({
            
            type: 'GET_STORIES',
            payload:{
              hits:data.hits,
              nbPages:data.nbPages,
            },
          });

    }catch(error)
    {
         console.log(error)
    }
  }

  const removePost = (post_ID) =>{
    dispatch({type:'REMOVE_POST',payload:post_ID});
  }

  const searchQuery = (SearchQuery) => {
    dispatch({type:'SEARCH_POST',payload:SearchQuery})
  }

  const getNextPage = () => {
    dispatch({
      type:'NEXT_PAGE'
    })
  }

  const getPrevPage = () => {
    dispatch({
      type: 'PREV_PAGE'
    })
  }

  useEffect(()=>{
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  },[state.query,state.page]);
   
    return( 
    <AppContext.Provider value={{...state,removePost,searchQuery,getNextPage,getPrevPage}}>
          {children}
    </AppContext.Provider>
    );
 };

 const useGlobalContext = () => {
   return useContext(AppContext);
 };

export {AppContext,AppProvider,useGlobalContext};


// consumer- lengthy - so removed
// useContext hook
