import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 140vh;
  margin: 0 auto;
  height: 130vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`

export const Logo = styled.img`
  width: 40%;
  margin-bottom: 5rem;
`
export const LinkWrapper = styled(Link)`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #000000 !important;
`

export const SubTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  color: #000000;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
