import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  color: #2a98d8;
  border: 2px solid #2a98d8;
  padding: 0px 16px 0px 16px;
  font-size: 16px;
  border-radius: 16px;
  height: 32px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2a98d8;
    color: white;
  }
`;

const OutlinedButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default OutlinedButton;
