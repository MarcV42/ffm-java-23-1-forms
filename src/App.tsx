import './App.css'
import {useState} from "react";
import {Student, studentData} from "./student.ts";
import StudentGallery from "./StudentGallery.tsx";

function App() {

    const [students, setStudents] = useState<Student[]>(studentData)

  return (
    <>
        <h1>
            Student Gallery
        </h1>
        <StudentGallery students={students} />
    </>
  )
}

export default App
