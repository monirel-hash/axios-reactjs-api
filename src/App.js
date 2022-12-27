import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListUser from './ListUser';
import './styles.css';


function App() {
  const [users, setUsers] = useState([]);

  function fetchUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <ListUser utilisateurs={users} />
    </div>
  );
}

export default App;
