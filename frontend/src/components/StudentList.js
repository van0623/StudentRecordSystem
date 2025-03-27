// import React from "react";
// import "../App.css";

// const StudentList = ({ students }) => {
//   return (
//     <div>
//       <h2>Student List</h2>
//       <ul>
//         {students.length === 0 ? (
//           <p>No students added yet.</p>
//         ) : (
//           students.map((student, index) => (
//             <li key={index}>
//               {student.name} - {student.course}
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };


// export default StudentList;

import React from "react";
import "../App.css";

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul className="student-list">
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          students.map((student, index) => (
            <li key={index} className="student-item">
              {/* Use the correct path for img1.jpg */}
              <img 
                src={`/img1.jpg`} 
                alt={`Photo of ${student.name}`} 
                className="student-photo"
              />
              <div className="student-info">
                <strong>{student.name}</strong> - {student.course}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default StudentList;
