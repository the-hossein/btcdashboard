import styled from "styled-components";
interface Props {
  _height?: string;
  _align?: string;
}
export const AlignCenterContainer = styled.div<Props>`
  //min-height: calc(100% - ${(a) => a._height});
  min-height: 100%;
  transition: all 1s ease-in-out;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: ${(a) => (a._align != undefined ? a._align : "center")};
  @media (max-width: 600px) {
    min-height: calc(100% - ${(a) => a._height} - 100px);
    align-items: flex-start;
  }
`;
