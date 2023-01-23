import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './App.scss'

export const App = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <main>
          <Post/>
        </main>
      </div>
    </div>
  )
}
