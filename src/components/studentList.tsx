import { IState as IProps } from "../App";

const StudentList = ({ student }: IProps) => {
  const renderStudentList = () => {
    return student.map((student) => {
      return (
        <li className="StudentList" key={student.name}>
          <p>{student.name}</p>
          <p>{student.age} years old</p>
          <p>{student.courseFeePaid} his/her fee</p>
        </li>
      );
    });
  };

  return <ul>{renderStudentList()}</ul>;
};

export default StudentList;
