// react component to display a quote, author, and link to the source
import ReactMarkdown from "react-markdown";

export interface HighlightCardProps {
  quote: string;
  author: string;
  sourceId: string;
  sourceName: string;
  category?: string;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({
  quote,
  author,
  sourceId,
  sourceName,
}) => {
  console.log("HighlightCardProps", quote, author, sourceId, sourceName);
  return (
    <div>
      <hr className=" my-6" />
      <ReactMarkdown>{quote}</ReactMarkdown>

      <p className="ml-2">
        - {author}
        <br />
        <a href={`https://readwise.io/bookreview/${sourceId}`}>{sourceName}</a>
      </p>
    </div>
  );
};
