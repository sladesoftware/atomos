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
        path: "/about#services",
        text: "services"
      },
      {
        path: "/about#fees",
        text: "fees"
      },
      {
        path: "/about#blog",
        text: "blog"
      },
      {
        path: "/about#team",
        text: "team"
      },
      {
        path: "/about#values",
        text: "values"
      }
    ]} />
  </MainFooterItem>
)

export default AboutUs