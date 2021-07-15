import { useState } from "react";
import "./App.css";
import StudentList from "./components/studentList";
import AddNewStudent from "./components/addNewStudent";

export interface IState {
  student: {
    name: string;
    age: number;
    courseFeePaid: string;
  }[];
}

function App() {
  const [student, setStudent] = useState<IState["student"]>([
    {
      name: "Serhat Polat",
      age: 19,
      courseFeePaid: "paid",
    },
  ]);

  return (
    <div className="App">
      <h1>Enroll New Student</h1>
      <AddNewStudent student={student} setStudent={setStudent} />
      <h1>Student List</h1>
      <StudentList student={student} />
    </div>
  );
}

export default App;
