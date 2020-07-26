import React, { useState, useEffect, useReducer } from 'react';
//import { courses, courses_data } from './models/Courses';
import CoursesList from './components/CoursesList';
import Search from './components/Search';
import { Container, Spinner } from 'react-bootstrap';
import { coursesReducer } from './reducers/CourseReducer';


function App() {

  // Strapi endpoint path
  const STRAPI_API_ENDPOINT = "http://localhost:1337/courses";

  const [courses, dispatchCourses] =  
    useReducer(
      coursesReducer, 
      {
        data: [],           // Will contain data array
        isLoading: false    // Loading state
      }
    );


  const [searchText, setSearchText] = useState(localStorage.getItem('searchText') || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = event => {
    setSearchText(event.target.value);
  }

  const filteredCourses = courses.data.filter(course => {
     return course.title.includes(searchText);
  })

  useEffect(() => {
    dispatchCourses({
      type: 'FETCH_COURSES_START'
    })
    fetch(STRAPI_API_ENDPOINT)
      // Convert result to json
      .then(response => response.json())
      .then(result => {
        // We call dispatchCourses again to 
        // set isLoading to false and to get the payload.
        dispatchCourses({
          type: 'FETCH_COURSES_SUCCESS',
          payload: result
        });
      })
      .catch((e) => console.log("Error fetching courses"));
  }, []); // DidMount

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
      <p />
      {/* Conditional rendering */}
      {/* Aninmation test v1 */}
      {courses.isLoading ? (
        <Spinner animation="border" variant="info" />
      ) : <CoursesList courses={courses} />
      }

    </Container>
  );
}

export default App;
