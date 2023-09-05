import { styled } from "styled-components";

export const MainLayoutDashboard = styled.main`
  width: 100%;
  max-width: 1700px;
  height: 100vh;
  margin: auto;
  padding: 1rem;
  @media (max-width: 600px) {
    padding: .5rem;
  }
  @media (min-width: 1400px) {
    padding: 2rem;
  }
  @media (min-width: 1600px) {
    padding: 3rem;
  }
`;
