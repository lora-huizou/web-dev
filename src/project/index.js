import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import UserList from "./users/list";
import Home from "./home";
import SignIn from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Project() {
  const [key, setKey] = useState("home");

  return (
    <div className="container-fluid">
      <h1>Project</h1>
      <div className="row">
        <div className="col-2">
          <div className="list-group">
            <Link to="/project/" className="list-group-item">
              Home
            </Link>
            <Link to="/project/signin" className="list-group-item">
              Signin
            </Link>
            <Link to="/project/signup" className="list-group-item">
              Signup
            </Link>
            <Link to="/project/account" className="list-group-item">
              Account
            </Link>
            <Link to="/project/search" className="list-group-item">
              Search
            </Link>
            <Link to="/project/users" className="list-group-item">
              Users
            </Link>
            <Link to="/project/details" className="list-group-item">
              Details
            </Link>
            <Link to="/project/table" className="list-group-item">
              All Users
            </Link>
          </div>
        </div>
        <div className="col-7">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/table" element={<UserTable />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/search" element={<Search />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/details/:albumId" element={<Details />} /> 
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetails />} />  */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;