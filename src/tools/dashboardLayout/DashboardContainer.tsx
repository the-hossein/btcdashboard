import { styled } from "styled-components";

interface IProps {
    gap?: string;
}

export const DashboardContainer = styled.div<IProps>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: ${(a) => a.gap ? a.gap : "1rem"  };
`