import React from "react"
import { graphql } from "gatsby"
import { Page, Layout, GutterContainer, List, ListItem } from "components"
import { Header, SubHeader, Paragraph } from "components/typography"
import { ServicePageContact } from "sections/services"

const RetainerPage = ({ data }) => {
  const services = (data && data.services && data.services.services) || []
  const service = services.find(x => x.title === "Retainer")

  return (
    <Page title="Services | Retainer">
      <Layout>
        <GutterContainer>
          <Header>
            {service.title}
          </Header>

          <SubHeader>
            {`What is a retainer service?`}
          </SubHeader>
          <Paragraph>
            {`Signing a retainer agreement with me grants you access to my knowledge and
            experience, so that I can help to guide your technological decisions and
            strategies. This is different to the ad hoc service, as you are not paying me
            to deliver work on a daily basis. Instead, you pay a fixed amount each month and
            can reach out to me as little or as often as you want.`}
          </Paragraph>

          <SubHeader>
            {`What benefit would I get?`}
          </SubHeader>
          <Paragraph>
            {`This approach is like having access to a virtual CTO or experienced consultant
            when you need them. You don't have the constant overhead of a salary or have to
            worry about constant invoices everytime you just want to ask a question. Instead
            of this, you would be able to reach out to me as many times as you need, for the 
            same fixed monthly cost, under any of the following, non-exhaustive, reasons:`}
          </Paragraph>
          <List>
            <ListItem>
              {`Answer questions via email`}
            </ListItem>
            <ListItem>
              {`Arrange phone/video calls to go through planned strategies or technologies`}
            </ListItem>
            <ListItem>
              {`Attend one-off or regular meetings as a guiding voice`}
            </ListItem>
            <ListItem>
              {`Support all areas of software development in building and delivering the right product`}
            </ListItem>
          </List>

          <SubHeader>
            {`What is not covered?`}
          </SubHeader>
          <Paragraph>
            {`The retainer agreement is an advice-based service, therefore it does not cover any implementation
            or delivery of any work. If you are looking for someone to help deliver your work by implementing it,
            then you may benefit more from either my Ad Hoc or Project-based services.`}
          </Paragraph>

          <SubHeader>
            {`How much do you charge?`}
          </SubHeader>
          <Paragraph>
            {`My retainer fee is £${service.mainCharge.rate}/${service.mainCharge.unit}. This is based on a rolling
            contract, so you are not tied in for any period of time. For every paid ${service.mainCharge.unit}, you
            gain access to my knowledge, expertise and support for that entire period to a reasonably unlimited extent.`}
          </Paragraph>

          <SubHeader>
            {`We haven't worked together before, so how will this work?`}
          </SubHeader>
          <Paragraph>
            {`No problem - let's change that! Before you sign anything, I will arrange an introductory call to get to know
            you and your business a little. Assuming that I agree that I am able to support you and that the retainer
            approach is the best fit for you, then I will send out a contract for you to sign and your first invoice will
            be due. Once this contract has been signed and the invoice paid, I will arrange one or more calls to go
            a little deeper into the areas that I might be able to help you. I will take this time to learn more about your
            business, products and technical strategy, so that I can identify how best to help support your business. Given
            this phase will take a little time, I will offer a grace period to cover this "getting to know you" part before
            your first retainer period comes into effect. Beyond this, I will continue to keep in touch whilst the retainer
            is active, so that I can keep up to date on how your business is going and any developments that would be
            useful for me to be aware of. Each ${service.mainCharge.unit} a new invoice will be sent, and once paid, we
            will roll onto the next period of the retainer. The retainer will remain active for as long as you need or want
            my support.`}
          </Paragraph>

          <ServicePageContact serviceTitle={service.title} />
        </GutterContainer>
      </Layout>
    </Page>
  )
}

export default RetainerPage

export const query = graphql`
  query {
    services {
      services {
        title
        mainCharge {
          rate
          unit
        }
      }
    }
  }
`