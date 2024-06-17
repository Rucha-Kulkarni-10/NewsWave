import React from 'react';
import { useGlobalContext } from './Context';

const Sources = () => {
   const {query,searchQuery} = useGlobalContext();

    return(
        <>
            {/* <h1>Hello From Sources</h1> */}
            <form onSubmit={(e)=> e.preventDefault()}>
                <div>
                    <input type="text"  placeholder='Search Here' onChange={(e)=>searchQuery(e.target.value)} value={query}/>
                </div>
            </form>
        </>
    );
}

export default Sources;