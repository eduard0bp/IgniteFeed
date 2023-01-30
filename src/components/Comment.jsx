import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import './Comment.scss'

export const Comment = ({ content, onDeleteComent }) => {
  const handleDeleteComment = () => {
    onDeleteComent(content)
  }
  
  return (
    <div className="comment">
      <Avatar hasBorder={false} src="https://github.com/eduard0bp.png" />

      <div className="comment-box">
        <div className="comment-content">
          <header>
            <div className="authorAndTime">
              <strong>Eduardo Batista</strong>
              <time
                title="23 de Janeiro às 20:45h"
                dateTime="2023-01-23 20:45:30"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
