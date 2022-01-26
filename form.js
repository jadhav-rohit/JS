console.log("Hello World");
const form = document.getElementById("formInfo");
// const form = document.querySelector("#formInfo");
// console.log(form.elements)
// create array for student object
const students = [];
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fName = form.elements["firstName"].value;
    const lName = form.elements["lastName"].value;
    const age = form.elements["age"].value;
    const male = form.elements["male"].checked;
    const female = form.elements["female"].checked;
    const gender = male ? "male":"female";
    const rollNo = form.elements["rollNo"].value;
    const dob = form.elements["birthday"].value;
    const hobbies = form.elements["hobbies"].value;
    const osType = form.elements["osType"].value;
    console.log(fName, lName, age,male,female,rollNo,dob,hobbies,osType,gender)
    student = {
        firstName: fName,
        lastName: lName,
        age: age,
        gender : gender,
        rollNo : rollNo,
        dob : dob,
        hobbies : hobbies.split(","),
        osType : osType

    }
    students.push(student);
    form.elements["firstName"].value = '';
    form.elements["lastName"].value = '';
    form.elements["age"].value = '';
    form.elements["male"].checked = false;
    form.elements["female"].checked = false;
    form.elements["rollNo"].value = '';
    form.elements["birthday"].value = '';
    form.elements["hobbies"].value = '';
    form.elements["osType"].value = '';
    console.log(students);

    
    // var display = document.getElementById('display');
    // var button = document.createElement('button');
    // button.type = 'button';
    // button.innerHTML = student.firstName;
    // const pElement = document.createElement('p');
    // button.addEventListener('click', (event) => {
    //     let stu = students.filter((student)=>{return student.firstName === event.target.innerHTML});
    //     console.log(stu);
    //     content = '';
    //     content += `<h1>${stu[0].firstName} ${stu[0].lastName}</h1>`;
    //     pElement.innerHTML = content;
    // });
    // display.appendChild(button);
    
    
    // document.getElementById("content").appendChild(pElement);






    // students.forEach(student => {
    //     var button = document.createElement('button');
    //     button.type = 'button';
    //     button.innerHTML = student.firstName;
    //     button.addEventListener('click',(event)=>{
    //         return `<h1>${student.firstName}<\h1>`
    //     });
    //     display.appendChild(button);
    // });


}
);

document.getElementById("get").addEventListener("click", () => {
    const displayRollNo = document.getElementById("getRollNo").value;
    const stu = students.find(student => student.rollNo == displayRollNo);
    console.log(stu);
    content = '';
    content += `
    <p>
    Name : ${stu.firstName} ${stu.lastName}<br>
    Roll No : ${stu.rollNo}<br>
    Gender : ${stu.gender}<br>
    Age : ${stu.age}<br>
    DOB : ${stu.dob}<br>
    Hobbies : ${stu.hobbies}<br>
    OS Type : ${stu.osType}
    </p>
    `;
    var display = document.getElementById('content');
    display.innerHTML = content;
});




