import React from 'react';

function UserList(props){
console.log("props", props)
    return(
        <div>
          {props.followers.map(followers => {
              return(
               <p>{followers.login}</p>
              )})}
        </div>
    );
}

export default UserList; 