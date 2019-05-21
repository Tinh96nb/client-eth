import Web3 from 'web3'

export function getWeb3 () {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum)
    window.ethereum.enable()
    try {
      return web3
    } catch (error) {
      return null
    }
  } else {
    return null
  }
}
