import React, {useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css";
import { addAssignment, updateAssignment, setAssignment} from "./assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";

function AssignmentEditor() {
  const { assignmentId, courseId} = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // edit mode
    console.log("Inside useEffect, assignmentId:", assignmentId);
    if (assignmentId && assignmentId !== "Create") {
      const assignmentToEdit = assignments.find(assignment => assignment._id === assignmentId);
      if (assignmentToEdit) {
        dispatch(setAssignment(assignmentToEdit));
      } else {
        // create mode
        const newAssignment = {
          _id: "",
          title: "",
          course: courseId,
          description: "",
          due: "",
          startDate: "",
          endDate: ""};
        dispatch(setAssignment(newAssignment));
      }
    }
  }, [assignmentId, dispatch, assignments, courseId]);
  
  const handleSave = () => {
    if (assignmentId === "Create") {
      // Generate new ID and add to database
      dispatch(addAssignment(assignment));
    } else {
      // Update the assignment in database
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAssignment({ ...assignment, [name]: value }));
  };

  if (!assignment) {
    return null; 
  }

  return (
    <div>
      <h2>Assignment Editor</h2>
      
      <label>Name:</label>
      <input        
        name="title"
        value={assignment.title}
        className="form-control mb-2"
        onChange={handleChange}
      />

      <label>Description:</label>
      <textarea 
        name="description"
        value={assignment.description}
        className="form-control mb-2"
        onChange={handleChange}
      />

      <label>Due Date:</label>
      <input 
        type="date"
        name="due"
        value={assignment.due}
        className="form-control mb-2"
        onChange={handleChange}
      />

      <label>Available From Date:</label>
      <input 
        type="date"
        name="startDate"
        value={assignment.startDate}
        className="form-control mb-2"
        onChange={handleChange}
      />

      <label>Available Until Date:</label>
      <input 
        type="date"
        name="endDate"
        value={assignment.endDate}
        className="form-control mb-2"
        onChange={handleChange}
      />

      <div className="d-flex justify-content-end mt-2">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger me-2">
          Cancel
        </Link>
        
        <button onClick={handleSave} className="btn btn-success">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;