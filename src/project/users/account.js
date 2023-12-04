import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const fetchAccount = async () => {
    try {
      const account = await client.account();
      setAccount(account);
    } catch (error) {
      navigate("/project/signin");
    }
  };
  // const fetchAccount = async () => {
  //   const account = await client.account();
  //   setAccount(account);
  //   };

  const save = async () => {
    await client.updateUser(account);
  };

  const findUserById = async (id) => {
    try {
      const user = await client.findUserById(id);
      setAccount(user);
    } catch (err) {
      console.log(err);
    }
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  const dateFormat = (isoString) => {
    if (!isoString) {
      return "2000-01-01";
    }
    const date = new Date(isoString);
    let year = date.getFullYear().toString();
    let month = String(date.getMonth() + 1).padStart(2, "0").toString();
    let day = String(date.getDate()).padStart(2, "0").toString();
    while (year.length < 4) {year = "0" + year;}
    while (month.length < 2) {month = "0" + month;}
    while (day.length < 2) {day = "0" + day;}
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  return (
    <div className="account-container">
      <h1>Account</h1>
      {account && (
        <div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="text"
              value={account.username}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Password"
              value={account.password}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="First Name"
              value={account.firstName}
              onChange={(e) =>
                setAccount({ ...account, firstName: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Last Name"
              value={account.lastName}
              onChange={(e) =>
                setAccount({ ...account, lastName: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="date"
              placeholder="DOB"
              value={dateFormat(account.dob)}
              onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              value={account.email}
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              value={account.role}
              onChange={(e) => setAccount({ ...account, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary w-100" onClick={save}>
              Save
            </button>
          </div>
          <div className="form-group">
            <Link to="/project/table" className="btn btn-warning w-100">
              Users
            </Link>
          </div>
          <div>
            <button onClick={signout} className="btn btn-danger w-100">
              Signout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Account;
