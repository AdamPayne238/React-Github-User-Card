import React from "react";

const UserCard = props => (


<div>
      <h1>Github</h1>
      
     <img src={props.users.avatar_url} alt={props.users.login} />
          <h1>{props.users.name}</h1>
          <p>{props.users.bio}</p>
          <p>{props.users.company}</p>
      
        <p>{props.users.followers}</p>
        </div>
        )

        export default UserCard;