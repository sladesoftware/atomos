import React from "react"
import { Header, Paragraph } from "components/typography"

const Values = () => (
  <div>
    <Header anchorId="values" offset>
      {`Our values`}
    </Header>

    <Paragraph alignment="justify">
      {`At Slade Software, we have a few core values that we believe are fundamental
      in running a successful and reputable business, and maintaining happy customers.
      Top of that list is to provide a personal service to all of our customers. We aim
      to never outsource any significant work, as we believe the personal touch is what
      sets us apart from the rest. That way, we can always ensure that the services we
      deliver are up to the high standard we hold, as well as meet the requirements
      and expectations of the customers.`}
    </Paragraph>
  </div>
)

export default Values