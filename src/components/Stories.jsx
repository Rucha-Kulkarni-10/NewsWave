import React from 'react';
import { useGlobalContext } from './Context';

const Stories = () => {
   const {hits,isLoading,removePost} = useGlobalContext();

   if(isLoading){
    return(
      <>
        <h1>Loading....</h1>
      </>
    );
   }

    return(
        <>
             {/* <h1>This Is my react App</h1> */}
         <div className="stories-div">
             {
              hits.map((curPost)=>{
                const {title,author,objectID,url,_tags} = curPost;
                return (<>
                  <div className="card" key={objectID}>
                     <h2>{title}</h2>
                     <p>
                      By <span>{author}</span> | <span>{_tags}</span> comments
                     </p>
                     <div className="card-button">
                      <a href={url} target='_blank' rel='noreferrer'>Read More</a>
                      <a href="/#" onClick={()=> removePost(objectID)}>Remove</a>
                     </div>
                  </div>
              </>
              );
             })}
          </div>
        </>
    );
}

export default Stories;