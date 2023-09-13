import { styled } from "styled-components";

interface IProps {
  mt?: string;
}

export const DashboardScroll = styled.div<IProps>`
  width: 100%;
  margin-top: ${(a) => (a.mt ? a.mt : "1rem")};
  height: ${(a) =>
    a.mt ? `calc(100% - 78px - ${a.mt})` : `calc(100% - 78px - 1rem)`};
  overflow-y: scroll;
  overflow-x: hidden;n
`;
