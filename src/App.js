import React, { useState } from 'react';
import CoursesList from './components/CoursesList';
import { courses } from './models/Courses';
import Search from './components/Search';

function App() {

  // This is array destructuring
  // -------| initial state value
  // -----------------| Function that is returned
  const [searchText, setSearchText] = useState('');


  const handleSearch = event => {
    setSearchText(event.target.value);
  }

  const filteredCourses = courses.filter(course => {
    return course.title.includes(searchText);
  })

  // const handleKeyPress = event => {
  //   if (event.key === 'Enter') {
  //     console.log('Enter pressed');
  //   }
  // }

  return (
    <div>
      <h1>List of denka</h1>
      <hr />
      <Search onSearch={handleSearch} />
      <CoursesList courses={filteredCourses} />
    </div>
  );
}

export default App;
