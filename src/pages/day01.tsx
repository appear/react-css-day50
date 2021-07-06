import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
`

const PanelContainer = styled.div`
  display: flex;
  width: 90vh;
`
const Panel = styled.div<{ active?: boolean }>`
  background-image: url('https://lh3.googleusercontent.com/proxy/OjHb4wcGm-X8bpjC4etBCYURn_vVjskyYGbq70cvSjhl693tUmsKtJPEyEJ2vyFXeEj6bX1b2Vsc7gNrPb4fF99szPbGUZUEn2HVHvie_IXKXCuL5KaWvvU');
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: flex 0.3s ease-in;

  ${({ active }) =>
    active &&
    `
      flex: 5;
  `}
`

function Day01() {
  const [page, setPage] = useState(0)

  const handlePage = (page: number) => setPage(page)

  return (
    <Container>
      <PanelContainer>
        {[...new Array(5)].map((_, idx) => (
          <Panel
            key={idx}
            active={page === idx}
            onClick={() => handlePage(idx)}
          />
        ))}
      </PanelContainer>
    </Container>
  )
}

export default Day01
