import React from "react"
import { Header, Paragraph } from "components/typography"

const Values = () => (
  <div>
    <Header anchorId="values" offset>
      {`My values`}
    </Header>

    <Paragraph>
      {`As this is my personal business, I have a few core values that I believe are fundamental
      in running a successful and reputable company, and maintaining satisfied clients.
      Top of that list is to provide a personal service to all of my clients. As such, I only take
      on a small number of clients at one time so that I can build close relationships with them and
      really focus my efforts. I also aim to never outsource any significant work, as I believe the
      personal touch is what sets me apart from the rest. That way, I can always ensure that the services I
      deliver are up to the high standard that I hold, as well as meet the requirements
      and expectations of my clients.`}
    </Paragraph>
  </div>
)

export default Values