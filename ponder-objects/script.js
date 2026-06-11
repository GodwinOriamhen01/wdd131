// Course object
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  logo: "images/js-logo.png",

  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 29, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 30, days: "TTh", instructor: "Sis A" }
  ],

  enrollStudent: function (sectionNum) {
    const index = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (index >= 0) {
      this.sections[index].enrolled++;
      renderSections(this.sections);
    } else {
      alert("Section not found");
    }
  }
};

// Display course info
document.querySelector("#courseName").textContent = aCourse.name;
document.querySelector("#courseCode").textContent = aCourse.code;

// Template for each row
function sectionTemplate(section) {
  return `
    <tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    </tr>
  `;
}

// Render table
function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

// Initial load
renderSections(aCourse.sections);

// Button click
document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});
