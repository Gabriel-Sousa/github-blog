import { ArrowSquareUpRight } from 'phosphor-react'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa'

import ReactMarkdown from 'react-markdown'

import { Link } from 'react-router-dom'
import { useIssue } from '../../hooks/usePost'
import { DistanceBetweenDate } from '../../utils/DistanceBetweenDates'
import {
  HeaderOfPost,
  MainContainer,
  PostContainer,
  PostContent,
} from './styles'

export function Post() {
  const { dataPost } = useIssue()

  return (
    <PostContainer>
      <PostContent>
        <HeaderOfPost>
          <div className="actionOfHeader">
            <Link to="/">
              <FaChevronLeft size={12} />
              VOLTAR
            </Link>

            <a href={dataPost.html_url} target={'_blank'} rel="noreferrer">
              <span>ver no github</span>
              <ArrowSquareUpRight size={12} />
            </a>
          </div>

          <p className="titlePost">{dataPost.title}</p>

          <div>
            <span>
              <FaGithub />
              {dataPost.user.login}
            </span>
            <span>
              <FaCalendarDay />
              {DistanceBetweenDate(dataPost.created_at)}
            </span>
            <span>
              <FaComment />
              {dataPost.comments}{' '}
              {dataPost.comments === 1 ? 'comentário' : 'comentários'}
            </span>
          </div>
        </HeaderOfPost>

        <MainContainer>
          <div>
            <ReactMarkdown>{dataPost.body}</ReactMarkdown>
          </div>
        </MainContainer>
      </PostContent>
    </PostContainer>
  )
}
