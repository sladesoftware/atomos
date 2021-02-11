import React from "react"
import PropTypes from "prop-types"
import { SubHeader, Paragraph } from "components/typography"
import { useCompanyDetails } from "queries"

const ServicePageContact = ({ serviceTitle }) => {
  const { email } = useCompanyDetails()

  return (
    <>
      <SubHeader>
        {`OK, I'm interested. What do I do now?`}
      </SubHeader>
      <Paragraph>
        {`Get in touch! I would love to virtually meet you and find out more about your business.`}
      </Paragraph>
      <Paragraph>
        {`You can drop me an email at: `}
        <a href={`mailto:${email}?subject=${serviceTitle} Services Enquiry`}>
          {email}
        </a>
      </Paragraph>
      <Paragraph>
        {` I look forward to hearing from you!`}
      </Paragraph>
    </>
  )
}

ServicePageContact.propTypes = {
  serviceTitle: PropTypes.string.isRequired
}

export default ServicePageContact