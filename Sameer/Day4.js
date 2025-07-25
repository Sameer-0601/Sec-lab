// What is an array of objects??
// An array of objects is a collection where each element is an object with properties.
// This is used to group related data together in a structured way.

// Object destructuring is a syntax in javascript that allows you to extract values from objects and assign them to variables in a clean and readable way.


let details={
    name:"js",
    totalmark:100,
    subject:{
        dbms:100,
        java:100,
    },
    sum:function(){
        let total=this.subject.dbms+this.subject.java;
        return total;
    }
}
console.log(details.name);
console.log(details["totalmark"]);
console.log(details.subject.dbms);
console.log(details.subject['java']);
console.log(details.sum());

let person={
    job:"SoftwareTester",
    salary:25000,
}
const {job:firstkey,salary:secondkey}=person
console.log(firstkey+" "+secondkey);


let arr=new Array(1,2,"Three");
console.log(arr[2]);

// array destructure
let arr2=["js",true];
const [name,b1,b2]=arr2;
console.log(name)


let students=[
    {name:"john",grade:"A"},
    {name:"Joe",grade:"B"},
    {name:"Jim",grade:"C"},
]
let gradestudents=students.filter(students => students.grade==="A")
console.log(gradestudents);

let names=["Asha","Bala","Charan"];
names.splice(1,1,"David");
console.log(names);

