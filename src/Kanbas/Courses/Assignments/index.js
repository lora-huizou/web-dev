import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlinePlus} from "react-icons/ai";
import { FaEllipsisV, FaCheckCircle, FaPlus} from 'react-icons/fa';
import {PiNotePencilFill} from "react-icons/pi";
import "./index.css";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>  
      <input
        class="place-holder form-control form-control-sm"
              type="text"
              placeholder="Search for Assignment"
              aria-label="Search for Assignment"
      />
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-light btn-sm me-2">
        <AiOutlinePlus /> Group
        </button>
        <button type="button" class="btn btn-danger btn-sm me-2">
          <AiOutlinePlus /> Assignments
        </button>
        <button type="button" class="btn btn-light btn-sm">
          <FaEllipsisV />
        </button>
      </div>
      <hr  />
      <ul  className="list-group">
        <li className="list-group-item d-flex align-items-center assignment-title">
          <FaEllipsisV className=".web-icon-ellipsis"/>
          <FaEllipsisV className=".web-icon-ellipsis"/>
          <span className="ms-2">Assignments for {courseId}</span>
          <button type="button" class="btn btn-light rounded-pill ms-auto">
            40% of Total
          </button>
          <FaPlus className=".web-icon-plus"/>
          <FaEllipsisV className=".web-icon-ellipsis ms-2" />
        </li>
      </ul>   

      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            <PiNotePencilFill className=".web-icon-note" />
            {assignment.title}
            <div className="float-end">
              <FaCheckCircle className=".web-icon-check ms-auto" />
              <FaEllipsisV className=".web-icon-ellipsis"/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;