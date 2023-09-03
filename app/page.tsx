import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

// get all the data from searchParams, extract it from props of a specific paage
export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  }); // if you console.log then it's gonna be shown in the vscode terminal (server side component)

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      {/* Hero acts as the display to home page to user to give brief information */}
      <Hero />

      {/* Car catalogue */}
      <div className="mt-12 padding-x padding-y max-width" id="dicover">
        <div className="tome__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {/* get each car and return it in CarCard */}
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {/* pass props to show more button component, we show 10 cars per page. we pass page number and is next page exists */}
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNextPage={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
