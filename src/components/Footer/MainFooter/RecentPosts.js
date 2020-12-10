import React from "react"
import { useRecentPosts } from "queries"
import NavLinks from "../../NavLinks"
import MainFooterItem from "./MainFooterItem"

const RecentPosts = () => {
  const posts = useRecentPosts()

  return (
    <MainFooterItem header="Recent Posts">
      <NavLinks links={posts} />
    </MainFooterItem>
  )
}

export default RecentPosts