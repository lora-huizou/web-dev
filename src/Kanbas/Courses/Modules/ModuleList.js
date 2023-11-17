import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <ul className="list-group">
      <li className="list-group-item add">
        <div className="input-button-wrapper button-group">
          <input
            className="module-input"
            placeholder="New Module"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />

          <button
            className="module-button btn btn-primary"
            //onClick={() => dispatch(updateModule(module))}
            onClick={handleUpdateModule}
          >
            Update
          </button>
          <button
            className="module-button btn btn-success"
            // onClick={() => dispatch(addModule({ ...module, course: courseId }))}
            onClick={handleAddModule}
          >
            Add
          </button>
        </div>
        <textarea
          className="description-textarea"
          placeholder="New Description"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item module-item">
            <div className="module-header">
              <h3>{module.name}</h3>
              <div className="button-group">
                <button
                  className="btn btn-success "
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <p>{module.description}</p>
            <p>{module._id}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;

