import styled from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
`

export const Box = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 20rem;
`

export const Favorites = styled.button`
  border: none;
  background-color: #c0c0c0;
  color: #000000;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: 0.7rem 2.2rem;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #9f9f9f;
  }
`

export const Clear = styled.button`
  border: none;
  background-color: #c0c0c0;
  color: #000000;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: 0.7rem 2.2rem;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #9f9f9f;
  }
`
