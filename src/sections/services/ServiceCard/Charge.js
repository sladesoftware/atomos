import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  padding: 1rem;
  text-align: center;
  height: 6rem;
  background-color: #ddd;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const MainContainer = styled.div`
`

const SecondaryContainer = styled.div`
`

const MainRateText = styled.h1`
  display: inline-block;
  color: #000;
  margin: 0;
`

const MainUnitText = styled.h4`
  font-weight: normal;
  display: inline-block;
  color: #666;
  margin: 0 0 0 0.4rem;
`

const SecondaryRateText = styled.h3`
  display: inline-block;
  color: #666;
  margin: 0;
`

const SecondaryUnitText = styled.h4`
  font-weight: normal;
  display: inline-block;
  color: #666;
  margin: 0 0 0 0.4rem;
`

const Charge = ({ mainCharge, secondaryCharge }) => {

  if (!mainCharge && !secondaryCharge) {
    return null
  }

  return (
    <Container>
      <InnerContainer>
        <MainContainer>
          <MainRateText>
            {`£${mainCharge.rate}`}
          </MainRateText>

          <MainUnitText>
            {`/${mainCharge.unit}`}
          </MainUnitText>
        </MainContainer>

        {secondaryCharge && (
          <SecondaryContainer>
            <SecondaryRateText>
              {`£${secondaryCharge.rate}`}
            </SecondaryRateText>

            <SecondaryUnitText>
              {`/${secondaryCharge.unit}`}
            </SecondaryUnitText>
          </SecondaryContainer>
        )}
      </InnerContainer>
    </Container>
  )
}

const chargeType = {
  rate: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
}

Charge.propTypes = {
  mainCharge: PropTypes.shape(chargeType),
  secondaryCharge: PropTypes.shape(chargeType)
}

export default Charge