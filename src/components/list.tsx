import * as React from "react";
import EmojiCard, { EmojiCardProps } from "./emojiCard";

export interface EmojiListProps {
  emojis: EmojiCardProps[];
}
const List: React.FunctionComponent<EmojiListProps> = ({ emojis }) => {
  return (
    <React.Fragment>
      <div className=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {emojis.map((emojis, index) => {
          return <EmojiCard key={index} {...emojis} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default List;
