import Styled, { styled } from "styled-components";

interface IProps {
  w: string;
  flex: string;
  gapY: string;
  gapX: string;
  justify: string;
  items: string;
  wrap: string;
  spacing: string;
  spacingX: string;
}

const Row = styled.div<Partial<IProps>>`
  width: ${(a) => (a.w ? a.w : "100%")};
  height: auto;
  flex: ${(a) => (a.flex ? a.flex : "auto")};
  gap: ${(a) => (a.gapX || a.gapY ? a.gapX ?? "" + a.gapY ?? "" : "auto")};
  display: flex;
  justify-content: ${(a) => (a.justify ? a.justify : "flex-start")};
  align-items: ${(a) => (a.items ? a.items : "start")};
  flex-wrap: ${(a) => (a.wrap ? a.wrap : "wrap")};
  margin-left: ${(a) => (a.spacingX ? "-" + a.spacingX : "initial")};
  margin-right: ${(a) => (a.spacingX ? "-" + a.spacingX : "initial")};
`;

export default Row;
