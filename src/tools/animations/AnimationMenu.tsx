import { styled } from "styled-components";

interface IProps {
  open: boolean;
  height: number;
}

export const AnimateMenu = styled.div<IProps>`
  width: 100%;
  height: ${(a) => (a.open ? `calc(${a.height}px + 1.5rem)` : "0px")};
  transition: all 0.2s linear;
  overflow: hidden;
`;
