
// for openweatherapi data
export const clean_data = (data) => {
  return data.map((e) => {
    return e.main;
  }); 
}