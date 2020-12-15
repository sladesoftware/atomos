import React from "react"
import { Header, Paragraph } from "components/typography"

const AboutTheCompany = () => (
  <div>
    <Header anchorId="company" offset>
      {`Myself and the company`}
    </Header>

    <Paragraph>
      {`I founded Slade Software to provide bespoke Software Development and Consultancy
        services built around you. Covering all aspects of software development, from
        product inception and architecture design to application development and cloud
        deployment. I am here to support and guide you through the entire process, or areas
        of specific need.`}
    </Paragraph>

    <Paragraph>
      {`I am a husband-to-be, father and passionate technologist. I am passionate about
        what I do in all aspects of my life, and I strive for the best. Throughout my life
        I have worked hard to achieve a number of goals, such as attaining a First Class Degree
        with Honours from University, starting my own business, and becoming a member of Mensa
        in 2019. But none of these compare to my more personal achievements of becoming a father
        (twice) and getting engaged.`}
    </Paragraph>

    <Paragraph>
      {`Through this business, I will strive to build and maintain close relationships with you,
        so that I can fully understand your business and what you both need and want in your products.
        That way, I can tailor my services to fit you best and I can adjust my working practices to best
        fit the you; whether that be to simply sit in as an advisor, or drive forward your technical
        excellence and product quality.`}
    </Paragraph>
  </div>
)

export default AboutTheCompany