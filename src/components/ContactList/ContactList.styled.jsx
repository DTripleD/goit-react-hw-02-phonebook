import styled from '@emotion/styled';

export const Contact = styled.p`
  margin: 20px;
`;

export const Element = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #000000;
  padding: 20px;
  max-width: 500px;
  margin: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: #e4183a;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;


  color: #fff;
  cursor: pointer;

  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 600;
  padding: 6px 16px;

  &:hover {
    background-color: #ad1d35;
  }

  &:focus {
    box-shadow: rgba(187, 17, 40, 0.4) 0 0 0 3px;
    outline: none;
  }
`;
