import { ThumbsUp, Trash } from 'phosphor-react'
import './Comment.scss'

export const Comment = () => {
  return (
    <div className="comment">
      <img src="https://avatars.githubusercontent.com/u/79476975?v=4" alt="" />

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
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom!</p>
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
