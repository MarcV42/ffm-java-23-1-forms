import './App.css'
import {ChangeEvent, FormEvent, useState} from "react";
import {Student, studentData} from "./student.ts";
import StudentGallery from "./StudentGallery.tsx";

function App() {

    const [students, setStudents] = useState<Student[]>(studentData)

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")

    function onFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
        setFirstName(event.target.value)
    }

    function onLastNameChange(event: ChangeEvent<HTMLInputElement>) {
        setLastName(event.target.value)
    }

    function onStudentSave(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const newStudent: Student = {
            firstName: firstName,
            lastName: lastName
        }

        const newStudents = [...students, newStudent]
        setStudents(newStudents)

        setFirstName("")
    }

    return (
        <>
            <h1>
                Student Gallery
            </h1>
            <StudentGallery students={students}/>

            <form onSubmit={onStudentSave}>
                <input value={firstName} onChange={onFirstNameChange}/>
                <input value={lastName} onChange={onLastNameChange}/>
                <button type="submit">SaveDeiDing</button>
            </form>

            <button type="button">Other</button>
        </>
    )
}

export default App