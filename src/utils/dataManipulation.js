
// for openweatherapi data
export const clean_data = (data) => {
  return data.map((e) => {
    let nuDate = new Date(e.dt*1000).getDay();
    e.dt = nuDate;
    console.log(e);
    
    return e;
  }); 
}