import React, { useState } from 'react';
import StudentList from './StudentList';

// TODO 1: Add a resetAttendance function to mark all students as absent

function App() {
  const initialStudents = [
    { id: 1, name: 'Alice', present: false },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: false },
    { id: 4, name: 'Diana', present: false }
  ]
  const [students, setStudents] = useState(initialStudents);

   // TODO 2: Create a toggleAttendance function and pass it to StudentList

  const toggleAttendance = (id) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, present: !student.present } : student
    ));
  };

  const resetAttendance = () => {
    setStudents(students.map(student => ({ ...student, present: false })));
  };

  const totalPresent = students.filter(student => student.present).length;
  const totalAbsent = students.filter(student => !student.present).length;

  return (
    <div className='container'>
      <h1>🎓 Attendance Tracker</h1>
      <StudentList
        students={students}
        onToggle={toggleAttendance}
      />
      <div className="summary">
        <p>✅ Present: {totalPresent}</p>
        <p>❌ Absent: {totalAbsent}</p>,
        {/* TODO 3: Add a Reset Attendance button here */}
        <button
          onClick={resetAttendance}
          className="reset-button">Reset Attendance
        </button>
      </div>
    </div>
  );
}

export default App;
