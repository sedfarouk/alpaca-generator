import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.selected ? "#055096" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#6fb0ec")};
  border: 2px solid ${(props) => (props.selected ? "#055096" : "#6fb0ec")};
  padding: 0px 16px;
  font-size: 16px;
  border-radius: 16px;
  height: 32px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => (props.selected ? "#055096" : "#07335c")};
    color: ${(props) => (props.selected ? "white" : "#07335c")};
  }
`;

const OutlinedButton = ({ selected, children, ...props }) => {
  return (
    <Button selected={selected} {...props}>
      {children}
    </Button>
  );
};

export default OutlinedButton;
