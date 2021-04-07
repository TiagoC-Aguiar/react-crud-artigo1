import React, { useState } from 'react'

import AddUserForm from './components/forms/AddUserForm'
import UserTable from './components/tables/UserTable'
import EditUserForm from './components/forms/EditUserForm'
import Header from './components/Header';

import './App.css'

const usersData = [
  {id: 1, name: 'Tania', username: 'floppydiskette'},
  {id: 2, name: 'Craig', username: 'siliconeidolon'},
  {id: 3, name: 'Ben', username: 'benisphere'},
];

const App = () => {

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const [editing, setEditing] = useState(false)

  const initialFormState = {id: null, name: '', username: ''}

  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true) 

    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <Header />
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>    
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}      
        
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App;

