import * as React from 'react'
import { getWeb3 } from './getWeb3'
import MetaMask from 'components/ui/MetaMask'
import { set, get } from 'common/helpers/session'

export default class CheckWeb3 extends React.Component {
  constructor () {
    super()
    this.state = {
      isInjectWeb3: false
    }
  }

  componentWillMount () {
    const web3 = getWeb3()
    const response = (res) => {
      set(res.token)
      this.props.getUserMe()
    }
    if (web3) {
      if (!web3.givenProvider.selectedAddress) {
        this.setState({ isInjectWeb3: false })
        return
      }
      const session = get()
      if (!session) {
        this.props.postLogin({
          address: web3.givenProvider.selectedAddress
        }, response)
      }
      this.setState({ isInjectWeb3: true })
    }
  }

  render () {
    if (!this.state.isInjectWeb3) {
      return <MetaMask />
    }
    return this.props.children
  }
}
