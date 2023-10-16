import React from "react";
import { useParams, Routes, Route, Navigate, useLocation,Link } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {FaBars} from "react-icons/fa";
import {FaGlasses} from "react-icons/fa"; 
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      {/* <h1>Course / {course.name} / {screen}</h1> */}
      <nav className="navbar d-flex justify-content-between">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <FaBars className="heading-icon" />
            <li className="breadcrumb-item"><Link to={`/Kanbas/Dashboard`}>Course</Link></li>
            <li className="breadcrumb-item"><Link to={`/Kanbas/Dashboard`}>{course.name}</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{screen}</li>
          </ol>
        </nav>
      </nav>
      <button
        type="button"
        className="btn btn-light"
        style={{ marginBottom: '10px', position: 'absolute', right: '10px', top: '10px' }}
      >
      < FaGlasses /> Student View
      </button>
      <hr />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "100px",
          }} 
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;