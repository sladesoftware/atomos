import React from "react"
import styled from "styled-components"
import { media } from "styles"
import CompanyDetails from "./CompanyDetails"
import QuickLinks from "./QuickLinks"
import AboutUs from "./AboutUs"
import RecentPosts from "./RecentPosts"

const NavigationFooter = styled.section`
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-wrap: wrap;
  color: #eee;
  justify-content: space-evenly;

  ${media.tablet`
    justify-content: space-between;
  `}

  ${media.phone`
    justify-content: none;
  `}
`

const MainFooter = () => (
  <NavigationFooter>
    <CompanyDetails />
    <QuickLinks />
    <AboutUs />
    <RecentPosts />
  </NavigationFooter>
)

export default MainFooter