import { useState } from "react";
import Header from "./Components/Header";
import StudentTable from "./Components/StudentTable";
import AddStudentForm from "./Components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 75 },
    { id: 2, name: "Rahul", score: 30 },
  ]);

  // Add Student
  const addStudent = (name, score) => {
    const newStudent = {
      id: students.length + 1,
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  // Update Score
  const updateScore = (id, newScore) => {
    const updated = students.map((student) =>
      student.id === id
        ? { ...student, score: Number(newScore) }
        : student
    );
    setStudents(updated);
  };

  return (
    <div className="container">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;