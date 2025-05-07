import React from 'react';

function Student({ student, onToggle }) {
  // TODO 5: Add an onClick to the button to trigger onToggle with student id

  const { id, name, present } = student;
  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <li className={`student-card ${present ? 'present' : 'absent'}`}>
      <span>{name}</span>
      <button onClick={handleToggle}>
        {present ? 'Mark Absent' : 'Mark Present'}
      </button>
    </li>
  );
}

export default Student;
