import React from 'react';

function UserList(props){
console.log("props", props)
    return(
        <div>
          {props.followers.map(followers => {
              return(
                <div className="followers">
                    <img key={followers.login} src={followers.avatar_url} alt={followers.login} />
                    <h1 key={followers.id}>{followers.login}</h1>
                    {/* <p key={followers.id}>{followers.login}</p> */}
                </div>
              )})}
        </div>
    );
}

export default UserList; 