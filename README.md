<h2>App.tsx</h2>
<code>
  
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
</code>
  
<h2>studentList.tsx</h2>
<code>
  
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
</code>

<h2>addNewStudent.tsx</h2>
<code>
  
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
</code>

<hr>
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
