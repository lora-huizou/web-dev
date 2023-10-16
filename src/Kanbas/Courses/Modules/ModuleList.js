
import React from "react";
import { useParams, Link } from "react-router-dom";
import db from "../../Database";
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {LiaEllipsisVSolid} from "react-icons/lia";
import { FaEllipsisV, FaCheckCircle, FaPlus, FaLink, FaExternalLinkAlt } from 'react-icons/fa';

import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      {/* button here */}
      <div className="module-container">
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
      <hr/>
      {/* module list here */}
      {
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
export default ModuleList;