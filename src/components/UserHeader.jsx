import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
import { Header } from 'semantic-ui-react'

const UserHeader = (props) => {
  useEffect(() => {
    props.fetchUser(props.userId)
  }, [])
  const { user } = props

  if (!user) {
    return null
  }

  return <Header>{user.name}</Header>
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId)
  }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)
