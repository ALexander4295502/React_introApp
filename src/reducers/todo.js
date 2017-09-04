const initState = {
  todos: [
    {id: 1, name: 'Render static UI', isComplete: true},
    {id: 2, name: 'Create Initial State', isComplete: true},
    {id: 3, name: 'Use State to Render UI', isComplete: false},
  ],
  currentTodo: 'temp'
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {...state, todos: state.todos.concat(action.payload)};
    case 'CURRENT_UPDATE':
      return {...state, currentTodo:action.payload}
    default:
      break;
  }
  return state;
}