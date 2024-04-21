// component that renders a list of highlights using the highlight card component

import React from "react";
import { HighlightCard, type HighlightCardProps } from "./HighlightCard";

export interface HighlightListProps {
  highlights: HighlightCardProps[];
}

export const HighlightList: React.FC<HighlightListProps> = ({ highlights }) => {
  return (
    <div>
      {highlights.map((highlight, index) => (
        <HighlightCard
          key={index}
          quote={highlight.quote}
          author={highlight.author}
          sourceId={highlight.sourceId}
          sourceName={highlight.sourceName}
        />
      ))}
    </div>
  );
};

export default HighlightList;
