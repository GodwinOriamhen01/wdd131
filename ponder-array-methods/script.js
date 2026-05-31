// Provided function
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

// Arrays given
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

// 1. forEach — words longer than 6 letters
console.log("Words longer than 6 letters:");
words.forEach(word => {
    if (word.length > 6) {
        console.log(word);
    }
});

// 2. map — uppercase words
const upperWords = words.map(word => word.toUpperCase());
console.log("Uppercase words:", upperWords);

// 3. filter — words containing "a"
const aWords = words.filter(word => word.includes('a'));
console.log("Words containing 'a':", aWords);

// 4. reduce — total letters
const totalLetters = words.reduce((total, word) => total + word.length, 0);
console.log("Total letters:", totalLetters);

// 5. indexOf — find "apple"
const index = words.indexOf("apple");
console.log("Index of 'apple':", index);

// 6. Template literal — display students on page
const output = document.getElementById("output");

students.forEach(student => {
    output.innerHTML += `
        <p>${student.first} ${student.last}</p>
    `;
});

// 7. Convert grades using map
const grades = ['A', 'B', 'C', 'A', 'F'];
const gradePoints = grades.map(g => convert(g));
console.log("Converted grade points:", gradePoints);
