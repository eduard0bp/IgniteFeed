import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import './Post.scss'

export const Post = ({ author, publishedAt, content }) => {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className="post">
      <header>
        <div className="author">
          <Avatar src={author.avatarUrl} />
          <div className="author-info">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className="content">
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a>{line.content}</a></p>
          }
        })}
      </div>

      <form className="comment-form">
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div>
        <Comment />
      </div>
    </article>
  )
}
