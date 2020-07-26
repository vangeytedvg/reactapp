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
            {course.authors.map(author => author.first_name + " " + author.last_name)}
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