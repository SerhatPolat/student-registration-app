import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  student: Props["student"];
  setStudent: React.Dispatch<React.SetStateAction<Props["student"]>>;
}

const AddNewStudent: React.FC<IProps> = ({ student, setStudent }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    courseFeePaid: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age) {
      return;
    }

    setStudent([
      ...student,
      {
        name: input.name,
        age: parseInt(input.age),
        courseFeePaid: input.courseFeePaid,
      },
    ]);

    setInput({
      name: "",
      age: "",
      courseFeePaid: "",
    });
  };

  return (
    <div className="addNewStudentSection">
      <input
        type="text"
        placeholder="Enter name"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        placeholder="Enter age"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <select
        name="courseFeePaid"
        id="courseFeePaid"
        value={input.courseFeePaid}
        onChange={handleChange}
      >
        <option value="" className="selectBoxPlaceholder">
          Course fee has been paid or not?
        </option>
        <option value="paid">paid</option>
        <option value="not paid">not paid</option>
      </select>
      <button onClick={handleClick}>ENROLL</button>
    </div>
  );
};

export default AddNewStudent;
