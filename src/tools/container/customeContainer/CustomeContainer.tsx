import React, { ReactElement } from "react";
import styled from "styled-components";
interface Props {
  _width: string;
  sm_width?: string;
  animation?: string;
  align_start?: boolean;
}
export const CustomeContainer = styled.div<Props>`
  width: ${(a) => a._width};
  margin: 1rem auto;
  transition: ${(a) => (a.animation != undefined ? a.animation : "unset")};
  ${(a) => (a.align_start === true ? "display: flex;align-items: start;" : "")}
  @media (max-width: 678px) {
    width: ${(a) => (a.sm_width != undefined ? a.sm_width : a._width)};
  }
`;
