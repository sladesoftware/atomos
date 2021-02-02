import React from "react"
import { graphql } from "gatsby"
import { Page, Layout, GutterContainer } from "components"
import { Header, SubHeader, Paragraph } from "components/typography"

const AdHocPage = ({ data }) => {
  const services = (data && data.services && data.services.services) || []
  const service = services.find(x => x.title === "Ad Hoc")

  return (
    <Page title="Services | Ad Hoc">
      <Layout>
        <GutterContainer>
          <Header>
            {service.title}
          </Header>

          <SubHeader>
            {`What is an ad hoc service?`}
          </SubHeader>
          <Paragraph>
            {`An Ad Hoc service is one of the ways I can deliver value to you. It allows me to work on just the bits you need me to work on, without having
            to sign a long-term contract or plan a complete project. This could be anything from a few days worth of work to a few weeks.`}
          </Paragraph>

          <SubHeader>
            {`Some examples of ad hoc work`}
          </SubHeader>
          <Paragraph>
            {`The concept of ad hoc work may sound quite vague, as it could cover many different areas or styles of work. Here are just a few examples of
            the scenarios for which you may want to bring me in on an ad hoc basis.`}
          </Paragraph>
          <ul>
            <li>{`Bug fixing`}</li>
            <li>{`Individual feature development`}</li>
            <li>{`Research into potential technologies`}</li>
          </ul>

          <SubHeader>
            {`How much do you charge?`}
          </SubHeader>
          <Paragraph>
            {`Ad hoc work is covered by a 2-tier pricing structure. The basic rate is charged at
            £${service.secondaryCharge.rate}/${service.secondaryCharge.unit}, with a cap of 7 hours per day; at which point the day rate is charged at
            £${service.mainCharge.rate}. For this type of work, I aim to work no more than the 7 hours per day, as I like to keep a healthy work/life
            balance. But any additional time I do log beyond this does not incur any additional charge.`}
          </Paragraph>
          <Paragraph>
            {`When compared with market rates for development contractors, a rate of £${service.mainCharge.rate}/${service.mainCharge.unit} may sound like
            a lot. However, I charge this amount specifically for ad hoc work as this type of work prevents me from taking on other work at the same time.
            Also, as it is billed based on time spent, rather than signing a longer term contract, the work is often short lived. This presents a high risk,
            as it is more difficult to collect a lot of this type of work. These are the justifications behind the advertised rate.`}
          </Paragraph>
          <Paragraph>
            {`Beyond these difficulties with this type of work, I also pride myself on delivering high-quality work that I have done myself
            (I do not outsource my work). I specialise in being able to deliver value to you that is tailored to your business.`}
          </Paragraph>

          <SubHeader>
            {`Who might benefit from this type of work?`}
          </SubHeader>
          <Paragraph>
            {`Lorem Ipsum`}
          </Paragraph>

          <SubHeader>
            {`We haven't worked together before, so how will this work?`}
          </SubHeader>
          <Paragraph>
            {`Lorem Ipsum`}
          </Paragraph>

          <SubHeader>
            {`OK, I'm interested. What do I do now?`}
          </SubHeader>
          <Paragraph>
            {`Lorem Ipsum`}
          </Paragraph>
        </GutterContainer>
      </Layout>
    </Page>
  )
}

export default AdHocPage

export const query = graphql`
  query {
    services {
      services {
        title
        mainCharge {
          rate
          unit
        }
        secondaryCharge {
          rate
          unit
        }
      }
    }
  }
`