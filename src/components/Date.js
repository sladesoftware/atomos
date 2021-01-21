import React from "react"
import PropTypes from "prop-types"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import IconText from "./IconText"

const Date = ({ date }) => (
  <IconText icon={faCalendar} text={date} />
)

Date.propTypes = {
  date: PropTypes.string.isRequired
}

export default Date