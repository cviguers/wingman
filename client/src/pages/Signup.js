import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  // state for storing the form data
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    birdname: "",
    password: "",
  });

  // mutation for adding a new user
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // function for handling changes in form input fields
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // log the form data to the console on form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      // add the new user by calling the addUser mutation
      const { data } = await addUser({
        variables: { ...formState },
      });

      // log in the user by saving the token to localStorage
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  }; // function for handling the form submission

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              // if there is data (successful signup)
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              // if there is no data (signup form)
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="enter your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="enter your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="enter your name"
                  name="birdname"
                  type="text"
                  value={formState.birdname}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="enter your password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  submit
                </button>
              </form>
            )}

            {error && (
              // if there is an error
              <div className="my-3 p-3">{error.message}</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
