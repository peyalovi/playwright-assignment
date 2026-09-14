export function randomEmployee() {

  const number = Date.now().toString().slice(-6);

  return {
    firstName: `Test${number}`,
    lastName: `User${number}`,
    employeeId: number
  };

}