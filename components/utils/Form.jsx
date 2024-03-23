import React from 'react'
import '/components/css/Form.css'
const Form = () => {
  return (
    <>
      <div className="container">
        <form>
          <div className="username">
            <span>Username:</span>
            <input type="text" placeholder="Enter your username" className="" />
          </div>
          <div className="pass">
            <span>Password:</span>
            <input
              type="password"
              placeholder="Enter your password"
              className=""
            />
          </div>
          <div className="btn">
            <button>Submit Details</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Form;