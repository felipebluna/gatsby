import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      background="#8899a6"
      category="Misc"
      date="30 de julho de 2019"
      timeToRead="5"
      title="Diga não ao Medium: Tenha sua própria plataforma"
      description="Algumas razões para você criar sua própria plataforma ao invés de soluções prontas"

    />
    
  </Layout>
)

export default IndexPage
