import './App.css'
import React, { createContext } from 'react'
import UserProfile from './components/UserProfile'

export const UserContext = createContext()

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Jim Smith',
      email: 'email@example.com',
      department: 'IT',
      location: 'USA',
    }
  }

  render() {
    const { name, email, department, location } = this.state
    return (
      <div>
        <UserContext.Provider value={{ name, email, department, location }}>
          <UserProfile />
        </UserContext.Provider>
      </div>
    )
  }
}
export default App
