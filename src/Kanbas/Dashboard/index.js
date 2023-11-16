import { React, useState } from "react";
//import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard(
  {courses, course, setCourse, addCourse,
  deleteCourse, updateCourse}
) {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <li className="list-group-item add">
        <div className="input-button-wrapper button-group">
            <input
              className="form-control"
              placeholder="New Course Name"
              value={course.name}
              onChange={(e) => setCourse({...course, name : e.target.value})
            }/>
            <input
              className="form-control"
              placeholder="New Course Number"
              value={course.number}
              onChange={(e) => setCourse({...course, number : e.target.value})
            }/>
            <input
              className="form-control"
              placeholder="New Course Start Date"
              value={course.startDate} 
              type="date" 
              onChange={(e) => setCourse({ ...course, startDate: e.target.value })
            }/>
            <input
              className="form-control"
              placeholder="New Course End Date"
              value={course.endDate} 
              type="date" 
              onChange={(e) => setCourse({ ...course, endDate: e.target.value })
            }/>

            <button className="btn btn-success" onClick={() => addCourse()} >
              Add
            </button>
            <button className="btn btn-primary" onClick={() => updateCourse(course)} >
              Update
            </button>
        </div>
      </li>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course, index) => (
          <div className="col">
            <div className="card h-100">
              <img src="/images/course.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-dark"
                >
                  {course.name}
                </Link>
                <p className="card-text">
                  Course Number: {course.number || 'N/A'} <br />
                  Start Date: {course.startDate || 'N/A'} <br />
                  End Date: {course.endDate || 'N/A'}
                </p>
                <button className="button-group btn btn-success" 
                        onClick={(event) => {event.preventDefault(); setCourse(course);}}>
                  Edit
                </button>
                <button className="button-group btn btn-danger" 
                        onClick={(event) => {event.preventDefault(); deleteCourse(course._id);}}>
                  Delete
                </button>
              </div>
            </div>
          </div>    
        ))}
      </div>
    </div>
  );
}

export default Dashboard;