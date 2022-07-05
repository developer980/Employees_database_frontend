const initialState = {
  salary: 0,
};

export function just_filter(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case "filter":
      return {
        ...state,
        min_salary: action.payload.min_salary,
        max_salary: action.payload.max_salary,
        status: action.payload.status,
      };
    default:
      return {
        ...state,
      };
  }
}
