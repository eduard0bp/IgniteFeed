import './Sidebar.scss'

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img
        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className='profile'>
        <strong>Username</strong>
        <span>Cargo</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  )
}
