import React from 'react'
import { Heading } from 'rebass'
import { Link as BaseLink } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #5352ed;
`

const Title = styled(Heading)`
  color: white;
  font-size: 60px;
`

const Link = styled(BaseLink)`
  background: #70a1ff;
  padding: 15px 20px;
  margin-top: 30px;
  text-decoration: none;
  color: white;
`

const Home = () => (
  <Wrapper>
    <Title>My Library</Title>
    <Link to="/docs">Documentation</Link>
  </Wrapper>
)

export default Home
