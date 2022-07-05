const initialState = {
  employees: [],
};

export function employeeReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [
          ...state.employees,
          {
            ...action.payload.employee,
          },
        ],
      };
    default:
      return state;
  }
}
