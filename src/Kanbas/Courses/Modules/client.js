import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";
//const MODULES_URL = "http://localhost:4000/api/modules";
//const MODULES_URL = "https://kanbas-node-server-app-c7jy.onrender.com/api/modules";
const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/modules`;

// get
export const findModulesForCourse = async (courseId) => {
    const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
  };

// create
export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

//delete
export const deleteModule = async (moduleId) => {
    const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
};

//update
export const updateModule = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};

