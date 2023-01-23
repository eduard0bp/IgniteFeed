import './Post.scss'

export const Post = () => {
  return (
    <article className='post'>
      <header>
        <div>
          <img src="https://avatars.githubusercontent.com/u/79476975?v=4" alt="" />
          <div>
            <strong>Eduardo Batista</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="23 de Janeiro às 20:45h" dateTime='2023-01-23 20:45:30'>Publicado há 1h</time>
      </header>
      <div className='content'>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉 <a href='#'>jane.design/doctorcare</a></p>
      <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}
