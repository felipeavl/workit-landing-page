import styled from "styled-components";

export const SecondaryButton = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  font-family: "Manrope", sans-serif;
  font-size: ${({ theme }) => theme.fonts.body.size};
  line-height: ${({ theme }) => theme.fonts.body.lineHeight};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  border: none;
  cursor: pointer;
  padding-bottom: 1px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.eucalyptus};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.eucalyptus};
  }
`;
