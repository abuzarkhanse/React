import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import Abuzar from './abuzar'

function MyApp() {
  return (
    <div>
      <h1>My App !</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

// const AnotherElement = (
//   <a href="https://google.com" target='_blank'>Google</a>
// )

const anotherUser = "khan"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  ' ',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <>
  <App />
  <Abuzar />
  <MyApp />
  </>
)
    
