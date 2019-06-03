import * as React from 'react'
import { getWeb3 } from './getWeb3'
import MetaMask from 'components/ui/MetaMask'
import { set } from 'common/helpers/session'

export default class CheckWeb3 extends React.Component {
  constructor () {
    super()
    this.state = {
      address: null,
      isInjectWeb3: false,
      msg: ''
    }

    this.postLogin = this.postLogin.bind(this)
  }

  postLogin () {
    const response = (res) => {
      set(res.token)
      // window.location.href = '/'
    }

    this.props.postLogin({
      address: this.state.address
    }, response)
  }

  async componentDidMount () {
    const web3 = await getWeb3()
    if (web3) {
      if (!web3.givenProvider.selectedAddress) {
        this.setState({ isInjectWeb3: false })
        return
      }
      this.setState({ address: web3.givenProvider.selectedAddress })
      if (window.location.pathname === '/auth') {
        if (this.props.profile) window.location.href = '/'
        this.setState({ isInjectWeb3: false, msg: 'Please login' })
        return
      }
      this.setState({ isInjectWeb3: true, address: web3.givenProvider.selectedAddress })
    }
  }

  render () {
    if (!this.state.isInjectWeb3) {
      return <MetaMask msg={this.state.msg} postLogin={this.postLogin} />
    }
    return this.props.children
  }
}
