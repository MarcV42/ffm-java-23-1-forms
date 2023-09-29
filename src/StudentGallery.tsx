import {Student} from "./student.ts";
import StudentCard from "./StudentCard.tsx";
import "./StudentGallery.css"

type StudentGalleryProps = {
    students: Student[]
}

export default function StudentGallery(props: StudentGalleryProps) {

    return (
        <div className="student-gallery">
            {props.students.map((student, index) => <StudentCard key={index} student={student}/>)}
        </div>
    )
}