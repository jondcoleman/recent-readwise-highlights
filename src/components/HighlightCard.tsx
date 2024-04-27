// react component to display a quote, author, and link to the source
import ReactMarkdown from "react-markdown";

export interface HighlightCardProps {
  quote: string;
  author: string;
  sourceId: string;
  sourceName: string;
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
      <ReactMarkdown>{quote}</ReactMarkdown>

      <p className="ml-2">
        - {author}
        <br />
        <a href={`https://readwise.io/bookreview/${sourceId}`}>{sourceName}</a>
      </p>
      <hr className=" my-6" />
    </div>
  );
};
