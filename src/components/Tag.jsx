import styled from 'styled-components';

const Tag = styled.div`
  height: 32px;
  background-color: rgb(33, 150, 243);
  border-radius: 16px;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0 8px 0 8px;
  margin: 0 4px 4px 0;

  &:hover {
    background-color: rgba(33, 150, 243, 0.8);
    cursor: pointer;
  }
`;

export default Tag;