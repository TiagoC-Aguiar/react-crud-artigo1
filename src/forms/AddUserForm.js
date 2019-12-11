import React, {useState} from 'react'

const AddUserForm = props => {

  const initialFormState = {id: null, name: '', username: ''}
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const {name, value} = event.target
    setUser({...user, [name]: value})
  }

  return(
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username) return
        
        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Name
        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      </label><br/>
      <label>Username
        <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      </label><br/>
      <button type="submit">Add new user</button><br/>
    </form>
  )
}

export default AddUserForm






