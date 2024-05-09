#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const students = [];
const id = Math.floor(1000 + Math.random() * 9999);
function addStudent() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your fullname:",
        },
        {
            type: "list",
            name: "course",
            message: "Select course:",
            choices: [
                "Web 3 and Metaverse",
                "Cloud-Native Computing",
                "Artificial Intelligence (AI) and Deep Learning",
                "Ambient Computing and IoT",
                "Genomics and Bioinformatics",
                "Network Programmability and Automation",
            ],
        },
        {
            type: "list",
            name: "gender",
            message: "Select your gender:",
            choices: ["Male", "Female"],
        },
        {
            type: "number",
            name: "phone",
            message: "Enter your phone number:",
        },
        {
            type: "number",
            name: "age",
            message: "Enter student age:",
        },
    ])
        .then((answers) => {
        const newStudent = {
            id: answers.id,
            name: answers.name,
            course: answers.course,
            gender: answers.gender,
            phone: answers.phone,
            age: answers.age,
        };
        students.push(newStudent);
        console.log(chalk.green("Student added successfully!"));
        showMenu();
    });
}
function studentList() {
    console.log(chalk.blue("List of Students:"));
    students.forEach((student, index) => {
        console.log(`${chalk.yellow(index + 1)}. Student Id: ${chalk.cyan(id)}\n   Name: ${chalk.cyan(student.name)}\n   Course: ${chalk.cyan(student.course)}\n   Gender: ${chalk.cyan(student.gender)}\n   Phone #: ${chalk.cyan(student.phone)}\n   Age: ${chalk.cyan(student.age)}\n`);
    });
    showMenu();
}
function showMenu() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "choice",
            message: "Please select your desire option:",
            choices: ["Add Student", "Student list", "Exit"],
        },
    ])
        .then((answers) => {
        switch (answers.choice) {
            case "Add Student":
                addStudent();
                break;
            case "Student list":
                studentList();
                break;
            case "Exit":
                console.log(chalk.yellow("Exiting..."));
                break;
        }
    });
}
console.log(chalk.magenta("Welcome to the Student Management System!"));
showMenu();
