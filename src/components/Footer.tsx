import styled from "styled-components";
import { FooterSection, FooterLink } from "../assets/styles/theme";

export const Footer = () => {
  return (
    <FooterSection>
      <ul>
        <li>
          {" "}
          {"\u00A9"} 2021 Krystina Rose Photography - All Rights Reserved
        </li>
        <Attribution>
          <p>
            Website design by{" "}
            <FooterLink href="https://www.linkedin.com/in/hector-ariceaga">
              Hector Ariceaga
            </FooterLink>{" "}
          </p>
        </Attribution>
      </ul>
    </FooterSection>
  );
};
const Attribution = styled.li`
  p {
    font-size: 0.75rem;
  }
`;
