import React from "react"
import { Header, Paragraph } from "components/typography"

const ServicesAndFees = () => (
  <div>
    <Header anchorId="services-and-fees" offset>
      {`Services and fees`}
    </Header>

    <Paragraph alignment="justify">
      {`Our services are structured into 3 main areas and our fees are calculated
      differently for each.`}
    </Paragraph>

    <ul>
      <li>Ad hoc work - hourly/daily rate</li>
      <li>Advisory work - retainer</li>
      <li>Project work - value/delivery-based fixed fee</li>
    </ul>

    <Paragraph alignment="justify">
      {`Take a look at our Services and Fees pages for more information.`}
    </Paragraph>
  </div>
)

export default ServicesAndFees