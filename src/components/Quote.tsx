import { ContentSection, Author } from "../assets/styles/theme";

type Props = {
  id: number;
  quote: string;
  author: string;
};

export const Quote = ({ id, quote, author }: Props) => {
  return (
    <ContentSection key={id}>
      <div>"{quote}"</div>
      <Author>-{author}</Author>
    </ContentSection>
  );
};
