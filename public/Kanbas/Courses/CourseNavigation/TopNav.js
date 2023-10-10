function Breadcrumb(courseCode, currentPage) {
  const breadcrumb = `
  <nav class="navbar">
    <div class="d-flex align-items-center flex-grow-1">
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li>
            <i class="heading-icon fas fa-bars" style="margin-left: 8px; margin-right: 8px; color: red;"></i>
          </li>
          <li class="breadcrumb-item">
            <a href="#" style="color: red; text-decoration: none">${courseCode}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">${currentPage}</li>
        </ol>
      </nav>
    </div>
    <div class="ml-auto">
      <button
        type="button"
        class="btn btn-light"
        style="margin-bottom: 10px">
        <i class="fas fa-glasses"></i> Student View
      </button>
    </div>
  </nav>
  <hr style="margin-top: -5px" />
`;

return breadcrumb;
}

export default Breadcrumb;

