import React from "react";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { Navbar } from "../../components/Navbar/Navbar";
import { useAppContext } from "../../contexts/AppContext";

export const Home = () => {
  const {
    state: { categories },
    dispatch,
  } = useAppContext();
  console.log(state);
  return (
    <div>
      <Navbar />
      {categories?.map((category) => (
        <CategoryCard key={category?.id} category={category} />
      ))}
    </div>
  );
};
