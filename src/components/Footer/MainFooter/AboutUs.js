import React from "react"
import MainFooterItem from "./MainFooterItem"
import NavLinks from "../../NavLinks"

const AboutUs = () => (
  <MainFooterItem header="About">
    <NavLinks links={[
      {
        path: "/about",
        text: "about"
      }
    ]} />
  </MainFooterItem>
)

export default AboutUs