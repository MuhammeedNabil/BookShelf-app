import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { Link } from 'react-router-dom';


const LogInPage = () => {
  return (
    <React.Fragment>
      <Card>
        <div className="p-5 text-white">
        <div className="text-center fw-bold fs-4 text-decoration-underline">
            <strong>Login</strong>
          </div>
          <form action="">
            {/* Email Input */}
            <label htmlFor="Email">Email</label>
            <input
              id="Email"
              className="form-control my-3"
              type="email"
              placeholder="Enter your Email"
            />
            {/* Password Input */}
            <label htmlFor="Password">Password</label>
            <input
              id="Password"
              className="form-control my-3"
              type="password"
              placeholder="Enter your Password"
            />
            {/* Buttons */}
            <div className="text-center">
              <Link data-testid='toHome' to={'/'}><Button className='me-2 px-5 mt-3'>login</Button></Link>
              <p className="mt-2 text-center">Don't have account <Link data-testid='tosignup' to={'/signup'}>Register</Link></p>
            </div>
          </form>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default LogInPage;
