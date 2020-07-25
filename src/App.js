import React, { useState, useEffect } from 'react';
import { courses } from './models/Courses';
import CoursesList from './components/CoursesList';
import Search from './components/Search';
import {Container, Spinner} from 'react-bootstrap';

const courses_data = [
  {
    id: 1,
    title: 'Denka going to walk',
    author: 'Danny Van Geyte',
    hours_video: 50,
    number_of_lectures: 400,
    rating: 10,
    url: 'http://denkatech.pytonanywhere.com'
  },
  {
    id: 2,
    title: 'Denka going to kakken',
    author: 'Danny Van Geyte',
    hours_video: 5,
    number_of_lectures: 40,
    rating: 100,
    url: 'http://denkatech.pytonanywhere.com'
  },
  {
    id: 3,
    title: 'Denka going to eat',
    author: 'Danny Van Geyte',
    hours_video: 150,
    number_of_lectures: 40,
    rating: 100,
    url: 'http://denkatech.pytonanywhere.com'
  }
]

/function App() {

  // This is array destructuring
  // -------| initial state value
  // -----------------| Function that is returned
  const [courses, setCourses] = useState([]);
  const [searchText, setSearchText] = useState(localStorage.getItem('searchText') || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = event => {
    setSearchText(event.target.value);
  }

  const filteredCourses = courses.filter(course => {
    return course.title.includes(searchText);
  })

  const getCoursesAsync = () =>
    new Promise(resolve =>
      setTimeout(() => resolve({ courses: courses_data }),
        2000
      )
    )

  useEffect(() => {
    setIsLoading(true);
    getCoursesAsync()
      .then(result => {
        setCourses(result.courses);
        setIsLoading(false);
    })
  }, [])

  // Function is executed when searchText is updated, hence
  // it is a side-effect.
  useEffect(() => {
    localStorage.setItem('searchText', searchText);
  }, [searchText]);


  return (
    <Container>
      <h1>List of denka</h1>
      <hr />
      <Search value={searchText} onSearch={handleSearch} />
      {/* Conditional rendering */}
      {/* Aninmation test v1 */}
      { isLoading ? (
        <Spinner animation="border" variant="info" />
      ):<CoursesList courses={filteredCourses} />
      }
      
    </Container>
  );
}

export default App;
