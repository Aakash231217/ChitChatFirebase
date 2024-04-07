import React from 'react';
import { useLocation } from 'react-router-dom';

const Chat = () => {
  const location = useLocation();

  // A function to parse query parameters
  const searchParams = new URLSearchParams(location.search);
  const userName = searchParams.get('Uname');

  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
}

export default Chat;
