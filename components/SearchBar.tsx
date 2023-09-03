"use client"; //because onSubmit that is a browser event
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { SearchManufacturer } from ".";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  // otherClasses is from props
  const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    // -ml-3 jumpt into the input field
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent default behavior of the browser (to refresh once we submit the form)
    event.preventDefault();
    if (manufacturer === "" && model === "")
      return alert("Please fill in the search bar");

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  // function to update the url bar to be like ?make=volkswage&tiguan
  const updateSearchParams = (model: string, manufacturer: string) => {
    // pass current window.location.search
    // if there was something else before, we need to know it and store it in the searchParams
    const searchParams = new URLSearchParams(window.location.search);

    // if we have the model we want to checkout, then we set model
    // otherwise we delete the previous model that was there
    if (model) searchParams.set("model", model);
    else searchParams.delete("model");

    if (manufacturer) searchParams.set("manufacturer", manufacturer);
    else searchParams.delete("manufacturer");

    // so we take the current pathname and append the search parameters and come to the final pathname
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        {/* SearchButton would only be used here, so no need to put it in components */}
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="model icon"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
