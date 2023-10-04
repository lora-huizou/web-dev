function Grades() {
    return `<select>
    <option>Gradebook</option>
</select>
<button>Import</button>
<select>
    <option>Export</option>
    <option>UnPublish</option>
</select>
<button>configure</button>

<table width="100%">
    <tbody>
        <tr>
            <td>Student Names<br/>
                <input title="Type the name of student to search for"
                placeholder="Search Students"/>
            </td>
        </tr>
        <tr>
            <td>Assignment Names <br/>
                <input title="Type the name of assignment to search for"
                placeholder="Search Assignments"/>
            </td>    
        </tr>
    </tbody>
</table>
<br />
<button>Apply Filters</button>

<table width="100%" border="1">
    <thead>
        <tr>
            <th>Student Name</th>
            <th>A1 - HTML</th>
            <th>A2 - CSS</th>
            <th>A3 - JS</th>
            <th>A4 - PHP</th>
            <th>A5 - SQL</th>
            <th>A6 - React</th>
            <th>A7 - Node</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th>Exam1</th>
            <th>Exam2</th>
            <th>Exam3</th>
            <th>Exam4</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td valign="top">Alice Wise</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
        </tr>
        <tr>
            <td valign="top">Princes Leia</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
            <td>90%</td>
        </tr>
        <tr>
            <td valign="top">Luke Skywalker</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
            <td>80%</td>
        </tr>
        <tr>
            <td valign="top">Han Solo</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
            <td>70%</td>
        </tr>
    </tbody>
</table>
  `;
  }
  
  export default Grades;
  