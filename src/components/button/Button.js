import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.eucalyptus};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: ${({ theme }) => theme.lineHeights.body};
  border: 2px solid transparent;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.eucalyptus};
    border-color: ${({ theme }) => theme.colors.eucalyptus};
  }
`;
