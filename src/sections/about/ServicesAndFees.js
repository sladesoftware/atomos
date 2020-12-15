import React from "react"
import { Header, Paragraph } from "components/typography"

const ServicesAndFees = () => (
  <div>
    <Header anchorId="services-and-fees" offset>
      {`Services and fees`}
    </Header>

    <Paragraph>
      {`My services are structured into 3 main areas and the fees are calculated
      differently for each.`}
    </Paragraph>

    <ul>
      <li>{`Ad hoc work - hourly/daily rate`}</li>
      <li>{`Advisory work - retainer-based`}</li>
      <li>{`Project work - value/delivery-based fixed fee`}</li>
    </ul>

    <Paragraph>
      {`Take a look at the Services and Fees pages for more information.`}
    </Paragraph>
  </div>
)

export default ServicesAndFees