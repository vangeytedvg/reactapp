// REDUCER
export const coursesReducer = (state, action) => {
    switch(action.type) {
      case 'FETCH_COURSES_START':
        return {
            ...state,
            isLoading: true
        };
      case 'FECH_COURSES_SUCCESS':
        return {
            ...state,
            isLoading: false,
            data: action.payload
        };
      case 'REMOVE_COURSE':
        return {
            ...state,
            data: state.filter(
                course => action.payload.id !== course.id
            )
        };
        
      default:
        console.log('Kwak')
    };
  };
  
  