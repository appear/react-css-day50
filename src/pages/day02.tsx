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
  text-align: center;
`

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: #efefef;
    transform: translateY(calc(-50% - 2px));
    z-index: -1;
    transition: 0.4s ease;
  }
`
const ProgressBar = styled.div<{ width?: number }>`
  position: absolute;
  top: 50%;
  left: 0;
  height: 4px;
  width: 0%;
  background-color: #03a9f4;
  transform: translateY(calc(-50% - 2px));
  z-index: -1;
  transition: 0.4s ease;

  ${({ width }) => `width: ${width}%;`}
`
const ProgressCircle = styled.div<{ active?: boolean }>`
  width: 30px;
  height: 30px;
  color: #999;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 3px solid #e0e0e0;
  transition: 0.4s ease;

  ${({ active }) =>
    active &&
    `
        border-color: #3498db;
        color: #3498db;
        font-weight: bold;
  `}
`

const ButtonContainer = styled.div`
  display: flex;
`

const Button = styled.div`
  background-color: #3498db;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;

  &:active {
    transform: scale(0.98);
  }
`

const MAX_PAGE = 4

function ProgressStep() {
  const [step, setStep] = useState(1)

  const handleStep = (step: number) => setStep(step)

  const handlePrev = () => {
    if (step !== 1) {
      setStep(step - 1)
    }
  }

  const handleNext = () => {
    if (step < MAX_PAGE) {
      setStep(step + 1)
    }
  }

  return (
    <Container>
      <ProgressContainer>
        <ProgressBar width={((step - 1) / (MAX_PAGE - 1)) * 100} />
        {[...new Array(MAX_PAGE)].map((_, idx) => {
          return (
            <ProgressCircle
              key={idx}
              active={step >= idx + 1}
              onClick={() => handleStep(idx + 1)}
            >
              {idx + 1}
            </ProgressCircle>
          )
        })}
      </ProgressContainer>
      <ButtonContainer>
        <Button onClick={handlePrev}>prev</Button>
        <Button onClick={handleNext}>next</Button>
      </ButtonContainer>
    </Container>
  )
}

export default ProgressStep
