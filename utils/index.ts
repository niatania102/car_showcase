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

export const calculateCarRentalPrice = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // base rental price per day in dollars
  const mileageFactor = 0.1; // additional rate per mile driven
  const ageFactor = 0.05; // additional rate per year of vehicle age

  // calculate additional rate based on mileage and age
  const milageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + milageRate * ageFactor;

  return rentalRatePerDay.toFixed(0);
};
