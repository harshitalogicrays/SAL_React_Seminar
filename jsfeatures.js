// let Student  =  {fname:"Ram",lname:"Sharma",age:30}
// console.log(Student.fname)
// let {fname,lname} = Student
// console.log(fname);
// let {fname:fn,lname} = Student
// console.log(fn);


// let arr = [2,3,5]
// let arr1 = [3,8,arr,9,2]
// console.log(arr1) //[3,8,[2,3,5],9,2]

// let arr2 = [3,8,...arr,9,2]
// console.log(arr2) //[3,8,2,3,5,9,2]


// let Employee = {...Student}
// Employee.age = 40
// console.log(Student)
// console.log(Employee)


//json

// let Student  =  {fname:"Ram",lname:"Sharma",age:30}
// let jsonstr = JSON.stringify(Student)//JS Object to JSON string
// console.log(jsonstr) 
// let obj = JSON.parse(jsonstr)//JSON string to JS Object 
// console.log(obj)

//Array - Array is collection of values 

let arr =[3,6,9,0,1,true, null, "hello"]
// arr[0]
// arr.length 
arr.push(30,50)
// console.log(arr);
arr.pop()
// console.log(arr);
// arr.splice(5,2,100,200,300)
arr.splice(5,0,100,200,300)
console.log(arr);

