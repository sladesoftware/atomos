import React from "react"
import styled from "styled-components"
import { media } from "styles"
import CompanyDetails from "./CompanyDetails"
import QuickLinks from "./QuickLinks"
import AboutUs from "./AboutUs"
import RecentPosts from "./RecentPosts"
import GutterContainer from "../../GutterContainer"

const NavigationFooter = styled.section`
  padding: 1.25rem 1.875rem;
  color: #eee;
`

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.phone`
    justify-content: none;
  `}
`

const MainFooter = () => (
  <NavigationFooter>
    <GutterContainer>
      <InnerContainer>
        <CompanyDetails />
        <QuickLinks />
        <AboutUs />
        <RecentPosts />
      </InnerContainer>
    </GutterContainer>
  </NavigationFooter>
)

export default MainFooter