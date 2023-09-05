import { styled } from "styled-components";

interface IProps {
  width: string;
  smWidth?: string;
  mdWidth?: string;
  lgWidth?: string;
  xlWidth?: string;
}

export const Item = styled.div<IProps>`
  width: ${(a) => a.width};
  height: 100%;
  @media (min-width: 480px) {
    width: ${(a) => (a.smWidth ? a.smWidth : a.width)};
  }
  @media (min-width: 720px) {
    width: ${(a) => (a.mdWidth ? a.mdWidth : a.width)};
  }
  @media (min-width: 1024px) {
    width: ${(a) => (a.lgWidth ? a.lgWidth : a.width)};
  }
  @media (min-width: 1400px) {
    width: ${(a) => (a.xlWidth ? a.xlWidth : a.width)};
  }
`;
