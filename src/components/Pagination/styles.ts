import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  border-radius: 0 0 0.5rem 0.5rem;
  padding-bottom: 3rem;
`
export const Button = styled.button`
  border: none;
  background-color: #c0c0c0;
  color: #000000;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin: 0.4rem;
  padding: 0.7rem 2.2rem;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #9f9f9f;
  }
`
