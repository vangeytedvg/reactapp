import React from 'react';

// Object destructuring
const CoursesList = ({ courses }) => {
    // Courses is the list in the models file
    return courses.map(course => {
      return (
        <div key={course.id}>
          <span> |
            {course.title}
          </span>
          <span> |
            {course.author}
          </span>
          <span> |
            {course.hours_video}
          </span>
          <br /><br />
        </div>
      )
    })
  }

  export default CoursesList;