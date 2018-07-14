import React from 'react'
import Link from 'gatsby-link'

import ContentPost from '../ContentPost'

class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        desc: postEdge.node.frontmatter.desc,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }
  render() {
    const postList = this.getPostList()
    return (
      <div className="posts-list">
        {
        postList.map(post => (
          <ContentPost
            key={post.slug} 
            title={post.title} 
            desc={post.desc} 
            date={post.date} 
            href={post.path}
            tags={post.tags}
          />
        ))}
      </div>
    )
  }
}

export default PostListing
