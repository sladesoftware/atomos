import React from "react"
import { Header, Paragraph } from "components/typography"

const Values = () => (
  <div>
    <Header anchorId="values" offset>
      {`My values`}
    </Header>

    <Paragraph>
      {`As this is my personal business, I have a few core values that I believe are fundamental
      in running a successful and reputable company, in order to provide a service that you will be happy with.
      Top of that list is to provide a personal service to you, which means that you will work with me
      directly throughout. While I am able to outsource some or all of the work, I generally choose not to as I believe I
      can deliver a better and more personal service if I handle the work myself. Through regular communication, I can
      ensure that the service I am delivering is exactly what you need and that you are happy with the quality.
      Because of this personal approach, I only have capacity to work with a small number of clients at one time, so that I can
      build a close relationship with you and really focus my efforts.`}
    </Paragraph>
  </div>
)

export default Values
