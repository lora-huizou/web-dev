function CourseNavigation(active) {
    const links = [
        { name: "Home", url: "/Kanbas/Courses/Home/screen.html" },
        { name: "Piazza", url: "/Kanbas/Courses/Piazza/screen.html" },
        { name: "Zoom Meetings", url: "/Kanbas/Courses/Zoom Meetings/screen.html" },
        { name: "Modules", url: "/Kanbas/Courses/Modules/screen.html" },
        { name: "Quizes", url: "/Kanbas/Courses/Quizes/screen.html" },
        { name: "Assignments", url: "/Kanbas/Courses/Assignments/screen.html" },
        { name: "Grades", url: "/Kanbas/Courses/Grades/screen.html" },
        { name: "People", url: "/Kanbas/Courses/People/screen.html" },
        { name: "Panopto Video", url: "/Kanbas/Courses/Panopto Video/screen.html" },
        { name: "Discussion", url: "/Kanbas/Courses/Discussion/screen.html" },
        { name: "Announcement", url: "/Kanbas/Courses/Announcement/screen.html" },
        { name: "Pages", url: "/Kanbas/Courses/Pages/screen.html" },
    ];

    return `
    <ul class="wd-course-navigation">
        ${links
        .map(
            (link) =>
            `<li class="${link.name === active ? "wd-active" : ""}"><a href="${
              link.url
            }">${link.name}</a></li>`
        )
        .join("")}
    </ul>
  `;
  }

  export default CourseNavigation;