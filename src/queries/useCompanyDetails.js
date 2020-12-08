import { graphql, useStaticQuery } from "gatsby"

const QUERY = graphql`
  query {
    site {
      siteMetadata {
        company {
          name
          email
          registrationNumber
          registeredAddress {
            street
            town
            county
            country
            postcode
          }
          director
        }
      }
    }
  }
`

export const useCompanyDetails = () => {
  const { site } = useStaticQuery(QUERY)

  return site.siteMetadata.company
}