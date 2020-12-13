import React from "react"
import { Header, Paragraph } from "components/typography"
import { useCompanyDetails } from "queries"

const AboutTheCompany = () => {
  const company = useCompanyDetails()

  return (
    <div>
      <Header anchorId="company" offset>
        {`Myself and the company`}
      </Header>

      <Paragraph>
        {`${company.name} is the registered name of my business; through which
        I provide Software Development and Consultancy services. I cover all aspectrs
        of Software Development, but I am most interested in supporting and
        guiding clients through all areas.`}
      </Paragraph>

      <Paragraph>
        {`I am a husband-to-be, father and passionate technologist. I am passionate about
        what I do in all aspects of my life, and I strive for the best. Throughout my life
        I have worked hard to achieve a number of goals, such as attaining a First Class Degree
        with Honours from University, starting my own business, and becoming a member of Mensa
        in 2018. But none of these compare to my more personal achievements of becoming a father
        (twice) and getting engaged.`}
      </Paragraph>

      <Paragraph>
        {`Through this business, I strive to build and maintain close relationships with my
        clients, so that I can fully understand their business and what they both need and want.
        That way, I can tailor my service to fit them best. I can adjust my working practices to best
        fit the client, whether that be to simply sit in as an advisor, or drive forward their
        technical excellence and product quality.`}
      </Paragraph>
    </div>
  )
}

export default AboutTheCompany