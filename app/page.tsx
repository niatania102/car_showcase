import { CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
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
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
