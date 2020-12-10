import React from "react"
import { Header, Paragraph } from "components/typography"
import { useCompanyDetails } from "queries"

const AboutTheCompany = () => {
  const company = useCompanyDetails()

  return (
    <div>
      <Header anchorId="company" offset>
        {`About the company`}
      </Header>

      <Paragraph alignment="justify">
        {`${company.name} is a privately owned company directed by ${company.director},
        Independent Consultant, offering Software Development and Consultancy services through
        technical leadership. We cover many areas, from discovery and analysis of requirements,
        architecture design, technology research and development, product prototyping,
        application development, and team upskilling; just to name a few.`}
      </Paragraph>
    </div>
  )
}

export default AboutTheCompany