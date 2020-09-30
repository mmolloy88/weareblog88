import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "We Are Matt Project Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <p>
          Welcome to my personal blog about previous projects I have worked on{" "}
          {/* <span role="img" aria-label="wave emoji">
            👋
          </span> */}
        </p>
        <p>
          As well as some tips and tricks I've picked up over my coding journey 
          <span role="img" aria-label="plus1">
          👍
          </span>
        </p>
        {/* <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p> */}
        <Link to="/blog/">
          <Button marginTop="35px">check out my blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
