import React, { Component } from 'react'
import { UserContext } from '../App'

class UserProfile extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ name, email, department, location }) => (
          <div className="container-md  mt-5 ">
            <ul className="list-group">
              <li className="list-group-item">Name: {name}</li>
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Department: {department}</li>
              <li className="list-group-item">Location: {location}</li>
            </ul>
          </div>
        )}
      </UserContext.Consumer>
    )
  }
}

export default UserProfile
