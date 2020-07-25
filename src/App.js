import React from 'react';

const courses = [
  {
    id:1,
    title: 'Denka going to walk',
    author: 'Danny Van Geyte',
    hours_video: 50,
    number_of_lectures: 400,
    rating: 10,
    url: 'http://denkatech.pytonanywhere.com'
  },
  {
    id:2,
    title: 'Denka going to kakken',
    author: 'Danny Van Geyte',
    hours_video: 5,
    number_of_lectures: 40,
    rating: 100,
    url: 'http://denkatech.pytonanywhere.com'
  },
  {
    id:3,
    title: 'Denka going to eat',
    author: 'Danny Van Geyte',
    hours_video: 150,
    number_of_lectures: 40,
    rating: 100,
    url: 'http://denkatech.pytonanywhere.com'
  }
]

function App() {

  // const greetings = {
  //   greeting_one: 'Hello',
  //   greeting_two: 'World'
  // }

  // function getGreetingMessage() {
  //   return 'Hello World'
  // }

  return (
    <div>
      {/* <h1>{greetings.greeting_one} {greetings.greeting_two}</h1> */}
      {/* <h1>{getGreetingMessage()}</h1> */}
      <h1>List of denka</h1>
      <hr/>
      {
        courses.map(function(course) {
          return( 
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
              <br/><br/>
            </div> 
          )
        })
      }
    </div>
  );
}

export default App;
