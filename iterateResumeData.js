let myResumeData = {

    name : "suresh",
    age  : 24,
    currentLocation : "Chennai",
    nativeLocation  : "Tuticorin",
    email : "sureshayyanar2326@gmail.com",
    phoneNumber : 7868845326,
    education : {
        college : "Saveetha Engineering College",
        location: "Chennai",
        degree  : "Bachelour of Engineering",
        department : "Mechanical",
        CGPA: 7.45
    },
    currentCompany: {
        name : "Infosys",
        location:"Chennai",
        designation:"Senior Systems Engineer",
        experience: "2.6 Years"
    },
    skillSets : {
        programmingLanguages : ["HTML","CSS","JS","React"],
        tools : ["Git","Github","JIRA","VS Code"]
        },
    languagesKnown : ["English","Tamil"],
     hobbie: "reading books"


}
console.log(myResumeData);

//for loop
console.log()
console.log("FOR LOOP")
let keys = Object.keys(myResumeData);
for(let i=0;i<keys.length;i++){
    console.log(`${keys[i]}: ${myResumeData[keys[i]]}`);
}

// for in loop
console.log()
console.log("FOR IN LOOP");
for(let key in myResumeData){
    console.log(myResumeData[key]);
}

// for of loop
console.log()
console.log("FOR OF LOOP")
for(let key of keys){
    console.log(`${key}: ${myResumeData[key]}`);
}

// forEach loop
console.log()
console.log("FOREACH LOOP")
keys.forEach(x => console.log(`${x}: ${myResumeData[x]}`));

 