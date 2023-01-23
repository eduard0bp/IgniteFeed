import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './App.scss'

export const App = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <main>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id
            corporis dolorum sequi maiores, quisquam magnam. Facere, quaerat sit
            quod cum distinctio soluta quas inventore exercitationem saepe
            asperiores minus voluptate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id
            corporis dolorum sequi maiores, quisquam magnam. Facere, quaerat sit
            quod cum distinctio soluta quas inventore exercitationem saepe
            asperiores minus voluptate!
          </p>
        </main>
      </div>
    </div>
  )
}
