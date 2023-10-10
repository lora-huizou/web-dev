function KanbasNavigation(active) {
    const links = [
        {
            name: "N",
            url: "#",
            icon: "neu-icon",
    
        },
        {
            name: "Account",
            url: "/Kanbas/Account/Profile/screen.html",
            icon: "fas fa-user-circle",
        },
        {
            name: "Dashboard",
            url: "/Kanbas/Dashboard/screen.html",
            icon: "fas fa-tachometer-alt",
        },
        {
            name: "Courses",
            url: "/Kanbas/Courses/Home/screen.html",
            icon: "fas fa-book",
        },
        {
            name: "Calendar",
            url: "/Kanbas/Calendar/screen.html",
            icon: "far fa-calendar-alt",
        },
        {
            name: "Inbox",
            url: "#",
            icon: "fas fa-envelope-open-text",
        },
        {
            name: "History",
            url: "#",
            icon: "fas fa-clock",
        },
        {
            name: "Studio",
            url: "#",
            icon: "fas fa-network-wired",
        },
        {
            name: "Commons",
            url: "#",
            icon: "fas fa-chevron-circle-right",
        },
        {
            name: "Help",
            url: "#",
            icon: "fas fa-question-circle",
        },   
    ];

    return `<ul class="wd-kanbas-navigation">
    ${links
      .map(
        (link) => `
        <li class="${link.name === active ? "wd-active" : ""}">
            <a href="${link.url}">
                <i class="${link.icon}" aria-hidden="true"></i>
                ${link.name}
            </a>
        </li>`
      )
      .join("")}
    </ul>
    `;
}
  
export default KanbasNavigation;