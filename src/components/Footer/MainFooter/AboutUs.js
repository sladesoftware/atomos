import React from "react"
import MainFooterItem from "./MainFooterItem"
import NavLinks from "../../NavLinks"

const AboutUs = () => (
  <MainFooterItem header="About">
    <NavLinks links={[
      {
        path: "/about#company",
        text: "company"
      },
      {
        path: "/about#values",
        text: "values"
      },
      {
        path: "/about#services-and-fees",
        text: "services and fees"
      },
      {
        path: "/about#blog",
        text: "blog"
      },
    ]} />
  </MainFooterItem>
)

export default AboutUs