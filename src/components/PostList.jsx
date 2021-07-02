import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { List } from 'semantic-ui-react'
import UserHeader from './UserHeader'

const PostList = (props) => {
  useEffect(() => {
    props.fetchPosts()
  }, [])

  const renderList = () => {
    return props.posts.map((post) => {
      return (
        <List.Item key={post.id}>
          <List.Content>
            <List.Header>{post.title}</List.Header>
            <List.Description>{post.body}</List.Description>
            <UserHeader userId={post.userId} />
          </List.Content>
        </List.Item>
      )
    })
  }
  return (
    <List divided relaxed>
      {renderList()}
    </List>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)
