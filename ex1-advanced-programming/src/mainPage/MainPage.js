import React from 'react';

function MainPage({user}) {

  return(
    <div className="welcome">
      <h2>hello, <span>{user.username}</span></h2>
  </div>
  );
}
export default MainPage;