const INITIAL_STATE = {
    id: '',
  };
  
  const selectedPill = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'PILL_TAKEN':
        return { id: action.id }
      default:
        return state;
    }
  };
  
  export default selectedPill;
  