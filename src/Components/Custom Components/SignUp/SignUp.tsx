import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

interface userData {
  first_name: string;
  last_name: string;
  age: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
  });
  return (
    <React.Fragment>
      <Card>
        <div className="p-5 text-white">
          {/* Form Title */}
          <div className="text-center fw-bold fs-4 text-decoration-underline">
            <strong>Register</strong>
          </div>
          <form action="">
            {/* First Name Input */}
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              className="form-control my-3"
              type="text"
              placeholder="Enter your First Name"
            />
            {/* Last Name Input */}
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              className="form-control my-3"
              type="text"
              placeholder="Enter your Last Name"
            />
            {/* Age Input */}
            <label htmlFor="age">Age</label>
            <input
              id="age"
              className="form-control my-3"
              type="number"
              placeholder="Enter your Age"
            />
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
              <Link data-testid='goToLogin' to={"/login"}>
                <Button className="px-5 mt-3">login</Button>
              </Link>
            </div>
          </form>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default SignUp;
