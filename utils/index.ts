export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5e814f8991mshcba74386f83df99p168c59jsn20826298910f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  //   default is GET request
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}
