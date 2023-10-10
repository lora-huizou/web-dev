import KanbasNavigation from "/Kanbas/KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "/Kanbas/Courses/CourseNavigation/CourseNavigation.js";
import Breadcrumb from "/Kanbas/Courses/CourseNavigation/TopNav.js";

function Home() {
    return `    <div class="d-block d-md-none">
        <a href="/Kanbas/KanbasNavigation">Kanbas Navigator</a>
        <a href="/Kanbas/Courses/CourseNavigation">Course Navigator</a>
        </div>
        <div class="wd-flex-row-container row">
            <div class="d-none d-md-block col-md-2 col-lg-1">
                ${KanbasNavigation("Courses")}
            </div>

            <div class="d-none d-md-block col-md-5 col-lg-10">
                <div class="row">
                    <div class="col-10">
                        ${Breadcrumb("CS5610.0000.0000", "Modules")}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-lg-4">
                        ${CourseNavigation("Home")}
                    </div>
                    <div class="col-md-4 col-lg-4">
                        Course Details
                    </div>
                    <div class="col-md-4 col-lg-4">
                        Course Status
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

export default Home;