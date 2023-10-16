import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
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
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p className="card-text">
                  Course Number: {course.number} <br />
                  Start Date: {course.startDate} <br />
                  End Date: {course.endDate}
                </p>
              </div>
            </div>
          </div>    
        ))}
      </div>
    </div>
  );
}

export default Dashboard;