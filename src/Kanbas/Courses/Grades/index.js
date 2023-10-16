import db from "../../Database";
import { useParams } from "react-router-dom";
import {FaFileImport, FaFileExport} from  "react-icons/fa";
import {BiCog} from "react-icons/bi";
import {FaEllipsisV} from "react-icons/fa";
import {LuFilter} from "react-icons/lu";
import "./index.css"


function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <div class="d-flex justify-content-end mb-3">
        <button type="button" class="btn btn-outline-secondary btn-sm me-2">
          <FaFileImport /> Import
        </button>
        <button type="button" class="btn btn-outline-secondary btn-sm me-2">
          <FaFileExport /> Export
        </button>
        <button type="button" class="btn btn-outline-secondary btn-sm me-2">
          <BiCog /> Settings
        </button>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h6>Student Names</h6>
          <form class="mb-3"><input type="text" class="form-control" placeholder="Search Students" /></form>
        </div>
        <div class="col-md-6">
          <h6>Assignment Names</h6>
          <form class="mb-3"><input type="text" class="form-control" placeholder="Search Assignments" /></form>
        </div>
      </div>
      <button type="button" class="btn btn-outline-secondary btn-sm me-2">
        <LuFilter />Apply Filter
      </button>
      <br />
      <br />
               
      <div className="table-responsive mb-3">
        <table className="table table-striped">
          <thead className="head">
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>);
}
export default Grades;