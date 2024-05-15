// react component to hold a select element to filter highlights by source and a list of highlights

import React from "react";
import { HighlightList } from "./HighlightList";
import type { HighlightCardProps } from "./HighlightCard";

export interface HighlightsContainerProps {
  highlights: HighlightCardProps[];
}

export const HighlightsContainer: React.FC<HighlightsContainerProps> = ({
  highlights,
}) => {
  const categories = highlights.map((highlight) => highlight.category);
  // usestate
  const [filter, setFilter] = React.useState<string>("");
  const [filteredHighlights, setFilteredHighlights] =
    React.useState<HighlightCardProps[]>(highlights);
  // handle filter change

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Filter by category", e.target.value);
    setFilter(e.target.value);
    if (e.target.value === "") {
      setFilteredHighlights(highlights);
    } else {
      const filtered = highlights.filter(
        (highlight) => highlight.category === e.target.value
      );
      setFilteredHighlights(filtered);
    }
  };

  return (
    <div>
      <select
        className="select select-primary w-full max-w-xs block  m-auto"
        onChange={handleFilterChange}
        value={filter}
      >
        <option disabled selected value={""}>
          Filter by category
        </option>
        <option value={""}>All</option>
        {Array.from(new Set(categories)).map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <HighlightList highlights={filteredHighlights} />
    </div>
  );
};
