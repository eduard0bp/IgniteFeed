import { Comment } from './Comment'
import './Post.scss'

export const Post = () => {
  return (
    <article className="post">
      <header>
        <div className="author">
          <img
            src="https://avatars.githubusercontent.com/u/79476975?v=4"
            alt=""
          />
          <div className="author-info">
            <strong>Eduardo Batista</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="23 de Janeiro às 20:45h" dateTime="2023-01-23 20:45:30">
          Publicado há 1h
        </time>
      </header>
      <div className="content">
        <p>Hello World 👋</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          recusandae vero id atque totam fuga, nam nostrum quasi, ad dolore
          aliquid in? Impedit, nesciunt nam. Velit molestiae atque impedit
          mollitia?
        </p>
        <p>
          👉 <a href="#">https://github.com/eduard0bp</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#ignite</a>{' '}
          <a href="">#rocketseat</a>{' '}
        </p>
      </div>

      <form className='comment-form'>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário.'/>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div>
        <Comment/>
      </div>
    </article>
  )
}
