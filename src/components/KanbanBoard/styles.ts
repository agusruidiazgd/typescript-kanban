import styled from "styled-components";
import { SCREEN_BREAKPOINTS } from "../../constants/breakpoints";

interface LabelContainerProps {
  color: any;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 0 0 5rem 0;
  position: relative;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem 10rem;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  @media (max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h1{
    padding: 0;
  }
`;

export const FilterContainer = styled.div`
  padding: 3px 10px;
  background-color: ${({ color }) => `${color}1A`};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  cursor: pointer;
  border: ${({ color }) => `0.5px solid ${color}`};
  label {
    font-weight: bold;
    color: ${({ color }) => color};
    padding-left: 5px;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
  }
`;
export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
export const StatusesColumnsContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 100vw;
  overflow-x: auto;
`;