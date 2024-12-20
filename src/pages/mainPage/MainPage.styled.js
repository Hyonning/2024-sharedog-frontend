import styled from "styled-components";

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.fall}; */
  /* position: fixed; */

  /* top: 50%; */
  /* left: 50%; */

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  border: 5px solid red;
`;
