import ModuleList from "../Modules/ModuleList";
import { FaBan, FaCheckCircle, FaFileImport, FaCloudUploadAlt, 
  FaCog, FaChartBar, FaBullhorn, FaBell, FaTimesCircle, FaCalendarAlt , FaCalendarCheck} from 'react-icons/fa';
import './index.css';


function Home() {
  return (
    <div className="row">
        <div className="col-10">
            <h2>Home</h2>
            <ModuleList />
        </div>
        <div className="col-2 d-none d-md-block">
            <h6>Course Status</h6>
            <div className="btn-group">
              <button className="btn btn-light btn-sm" style={{ width: '120px'}}>
                <FaBan /> Unpublish
              </button>
              <button className="btn btn-success btn-sm" style={{ width: '120px' }} disabled>
                <FaCheckCircle /> Published
              </button>   
            </div>
            <br />
            <br />
            <div className="col-20">
              <button type="button" 
                      className="btn btn-light btn-sm w-100 left-align-icon-text-btn">
                <FaFileImport /> Import Existing Content
              </button>
            </div>
            <div className="col-20">
              <button type="button" className="btn btn-light btn-sm w-100 left-align-icon-text-btn">
                <FaCloudUploadAlt /> Import from Commons
              </button>
            </div>
            <div className="col-20">
              <button type="button" className="btn btn-light btn-sm w-100 left-align-icon-text-btn">
                <FaCog /> Choose Home Page
              </button>
            </div>
            <div className="col-20">
              <button type="button" className="btn btn-light btn-sm w-100 left-align-icon-text-btn">
                <FaChartBar /> View Course Stream
              </button>
            </div>
            <div className="col-20">
              <button type="button" className="btn btn-light btn-sm w-100 left-align-icon-text-btn">
                <FaBullhorn /> New Announcement
              </button>
            </div>
            <div className="col-20">
              <button type="button" className="btn btn-light btn-sm w-100 left-align-icon-text-btn">
                <FaChartBar /> New Analytics
              </button>
            </div>
            <div className="col-20">
              <button type="button" className="btn btn-light btn-sm w-100 left-align-icon-text-btn">
                <FaBell /> View Course Notification
              </button>
            </div>
            <br />
            <br />

            {/* to-do */}
            <div className="to-do">
                <h6 className="to-do-title">To Do</h6>
                <hr />
                <div className="d-flex align-items-center mb-2">
                  <span className="badge bg-danger me-2 .web-icon-todo">1</span>
                  <span className="text-danger me-auto .web-icon-todo">Grade A1 - ENV + HTML</span>
                  <FaTimesCircle className="text-muted ms-3 .web-icon-todo" />
                </div>   
            </div>
            <br />
            <br />
            <div className="coming-up">
                <div className="header d-flex justify-content-between align-items-center">
                  <h6 className="coming-up-title">Coming Up</h6>
                  <div className="calendar-info d-flex align-items-center">
                      <FaCalendarAlt className="calendar-icon-1" />
                      <small className="calendar-text text-danger ms-2">View Calendar</small>
                  </div>
                </div>   
            </div>
            <hr class="my-1" />
            <div class="event-item d-flex flex-column align-items-start">
              <div class="d-flex align-items-center">
                <FaCalendarAlt className="calendar-icon-2 text-danger"/>
                <span class="event-title text-danger">Lecture</span>
              </div>
              <small>Leture 0000-00</small>
            </div>
          </div>
      </div>
  );
}

export default Home;
