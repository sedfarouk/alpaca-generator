import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: black;
  border: 2px dashed white;
  padding: 0px 16px;
  font-size: 20px;
  height: 60px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;

  &:hover {
    border-color: black;
    background-color: "#a9b8bd";
  }

  &:active {
    border-color: white;
    color: white;
    background-color: black;
  }
`;

const FeatureButton = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};

export default FeatureButton;
