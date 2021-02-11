import React from "react"
import { graphql } from "gatsby"
import { Page, Layout, GutterContainer } from "components"
import { Header, SubHeader, Paragraph } from "components/typography"
import { ServicePageContact } from "sections/services"

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
            Also, as it is billed based on time spent, rather than signing a longer term contract, the work is often short lived. This presents a higher risk
            to me, as it is more difficult to collect a lot of this type of work. These are a few justifications behind the advertised rate.`}
          </Paragraph>
          <Paragraph>
            {`Beyond these difficulties with this type of work, I also pride myself on delivering high-quality work that I have done myself
            (I do not outsource my work). I specialise in being able to deliver value to you that is tailored to your business.`}
          </Paragraph>

          <SubHeader>
            {`We haven't worked together before, so how will this work?`}
          </SubHeader>
          <Paragraph>
            {`I aim for our relationship to be a long one. As such, I will take the time to get to you know you and your business before I agree to take on
            any work. This way I can provide you with assurances that I will be able to deliver the work that you require at the level of quality I pride
            myself on. My approach here is twofold:`}
          </Paragraph>
          <ol>
            <li>{`I will start by booking in a few calls and virtual meetings so that we can discuss openly your business and requirements. This will give
            me initial insight into the type of work that may be required and where I can possibly add value.`}</li>
            <li>{`Once I understand enough about how I can deliver value to you, I will agree to take on some work. In the early stages of delivering services
            to you, it may take me a little longer than normal to complete the work as I will have to gain deeper insights into your products and solutions
            whilst I am working with them. I maintain a focused approach here; only delving into what is relevant to the task at hand.`}</li>
          </ol>
          <Paragraph>
            {`The longer that we work
            together, the more I will come to understand the deeper complexities of your business, and so the less time it will take for me to complete any
            work.`}
          </Paragraph>

          <ServicePageContact serviceTitle={service.title} />
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