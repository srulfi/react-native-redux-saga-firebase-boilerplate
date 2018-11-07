import React, { Component } from 'react'
import {
  ActivityIndicator,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { AuthActions, DatabaseActions } from '../actions'
import { BaseStyles } from '../themes'

class Launch extends Component {

  componentDidMount () {
    const { getDatabase, syncUser } = this.props

    getDatabase()
    syncUser()
  }

  componentDidUpdate () {
    const {
      loadingAuth,
      loadingDatabase,
      successAuth,
      successDatabase,
      errorAuth,
      errorDatabase,
      loggedIn,
      navigation
    } = this.props

    if (!loadingAuth && !loadingDatabase) {
      if (successAuth && successDatabase) {
        const screen = loggedIn ? 'Home' : 'Login'
        navigation.navigate(screen)
      } else if (errorAuth || errorDatabase) {
        // handle errors
      }
    }
  }

  render () {
    return (
      <View style={BaseStyles.mainContainer}>
        <ActivityIndicator />
      </View>
    )
  }
}

Launch.propTypes = {
  loadingAuth: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  successAuth: PropTypes.bool.isRequired,
  errorAuth: PropTypes.bool.isRequired,
  loadingDatabase: PropTypes.bool.isRequired,
  successDatabase: PropTypes.bool.isRequired,
  errorDatabase: PropTypes.bool.isRequired,
  syncUser: PropTypes.func.isRequired,
  getDatabase: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  loadingAuth: state.auth.loading,
  loggedIn: state.auth.loggedIn,
  successAuth: state.auth.success,
  errorAuth: state.auth.error,
  loadingDatabase: state.database.loading,
  successDatabase: state.database.success,
  errorDatabase: state.database.error,
})

const mapDispatchToProps = dispatch => ({
  getDatabase: () => dispatch(DatabaseActions.getDatabase()),
  syncUser: () => dispatch(AuthActions.syncUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Launch)
