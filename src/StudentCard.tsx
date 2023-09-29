import {Student} from "./student.ts";
import "./StudentCard.css"


type StudentCardProps = {
    student: Student
}

export default function StudentCard(props: StudentCardProps) {

    return (
        <div className={"student-card"}>
            <p className="student-title">
                {props.student.lastName}
            </p>
            <p className="student-subtitle">
                {props.student.firstName}
            </p>
        </div>
    )
}
