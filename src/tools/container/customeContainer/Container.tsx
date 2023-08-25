import styled from "styled-components";
interface Props {
  top: string;
}
export const Container = styled.div<Props>`
  max-width: 1700px;
  width: 100%;
  margin: auto;
  margin-top: ${(a) => a.top};
  padding-left: 2rem;
  padding-right: 2rem;
  @media (max-width: 600px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 1400px) {
    padding-left: 4rem;
    padding-right: 4em;
  }
  @media (min-width: 1600px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`;
