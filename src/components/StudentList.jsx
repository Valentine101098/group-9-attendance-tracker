import React from 'react';
import Student from './Student';

function StudentList({ students, onToggle }) {
  return (
    <div className="student-list">
       {/* TODO 4: Map through students and render Student components */}
      {students.map(student => (
        <Student
          key={student.id}
          student={student}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default StudentList;
