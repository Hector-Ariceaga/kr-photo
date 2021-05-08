import { ContentSection, Tag, Subtitle } from "../assets/styles/theme";

type Props = {
  tag?: string;
  subtitle: string;
  children?: React.ReactNode;
};

export const Section = ({ tag, subtitle, children }: Props) => {
  return (
    <ContentSection>
      {tag && <Tag>{tag}</Tag>}
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </ContentSection>
  );
};
