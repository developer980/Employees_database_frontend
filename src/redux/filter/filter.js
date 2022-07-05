export function filter_employees(payload) {
  return {
    type: "filter",
    payload,
  };
}
