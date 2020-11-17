import React from 'react'
import { hot } from 'react-hot-loader/root'

const Module = () => {
  return <>Modulees</>
}

const App = () => {
  return <div>Hello!! <Module /></div>
}

export default hot(App)
