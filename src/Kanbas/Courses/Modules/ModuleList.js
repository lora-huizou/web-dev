import React, { useState }from "react";
import { useParams, Link } from "react-router-dom";
import db from "../../Database";
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {LiaEllipsisVSolid} from "react-icons/lia";
import { FaEllipsisV, FaCheckCircle, FaPlus, FaLink, FaExternalLinkAlt } from 'react-icons/fa';
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {addModule, deleteModule, updateModule, setModule,} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  
  return (
    <ul className="list-group">
      <li className="list-group-item add">
        <div className="input-button-wrapper button-group">
          <input
              className="module-input"
              placeholder="New Module"
              value={module.name}
              onChange={(e) => dispatch(setModule({...module, name: e.target.value }))
            }/>

          <button 
            className="module-button btn btn-primary" 
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <button 
            className="module-button btn btn-success" 
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
        </div>
        <textarea
          className="description-textarea"
          placeholder="New Description"
          value={module.description}
          onChange={(e) => dispatch(setModule({...module, description: e.target.value }))
        }/> 
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
        <li key={index} className="list-group-item module-item">
          <div className="module-header">
            <h3>{module.name}</h3>
            <div className="button-group">
              <button className="btn btn-success " onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
            </div>
          </div>
          <p>{module.description}</p>
          <p>{module._id}</p>
        </li>))
      }
    </ul>
  );
}
export default ModuleList;



      {/* <div className="module-container">
          <button type="button" className="btn btn-light">Collapse All</button>
          <button type="button" className="btn btn-light">View Progress</button>
          < Link className="dropdown btn btn-light dropdown-toggle"
             href="#"
             role="button"
             data-bs-toggle="dropdown"
             aria-expanded="false">
            <AiOutlineCheckCircle className="web-icon-check"/>Publish All
          </Link>
          <button type="button" className="btn btn-danger">
            <AiOutlinePlus/> Module
          </button>
          <button type="button" className="btn btn-light">
            <LiaEllipsisVSolid/>
          </button>
      </div>
      <hr/> */}
      {/* module list here */}
      {/* {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ul key={index} className="list-group">
              <li className="list-group-item">
                <FaEllipsisV className=".web-icon-ellipsis"/>
                <FaEllipsisV className=".web-icon-ellipsis"/>
                <div className="module-title">
                  {module.name}
                </div>
                <div className="float-end">
                    <FaCheckCircle className="web-icon-check-circle" />
                    <FaPlus className="web-icon-plus" />
                    <FaEllipsisV className=".web-icon-ellipsis" />
                </div>
              </li>

            <li key={index} className="list-group-item">
            <p>{module.description}</p>
              {
                module.lessons && (
                  <ul className="list-group">
                    {
                      module.lessons.map((lesson, index) => (
                      <li key={index} className="list-group-item">
                        <FaEllipsisV className=".web-icon-ellipsis"/>
                        <FaEllipsisV className=".web-icon-ellipsis"/>
                        <div className="module-title">
                          {lesson.name}
                        </div>
                        <div className="float-end">
                            <FaCheckCircle className="web-icon-check-circle" />
                            <FaPlus className="web-icon-plus" />
                            <FaEllipsisV className=".web-icon-ellipsis" />
                        </div>
                        <p>{lesson.description}</p>
                      </li>
                      ))
                    }
                  </ul>
                )
              }
            </li>
            </ul>
          ))
      }
    </ul>
  );
}
export default ModuleList; */}