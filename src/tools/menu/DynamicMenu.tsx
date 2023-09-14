import styled from "@emotion/styled";

interface IProps {
  open?: boolean;
  height?: string;
}

export const DynamicMenuItems = styled.ul<IProps>`
  width: 100%;
  height: auto;
  transition: all 0.8s linear;
  margin-top: 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 12px;
  padding: 0;
  padding-right: 1rem;
  list-style: none;
  overflow: hidden;
  a{
    width: 100%;
  }
`;
