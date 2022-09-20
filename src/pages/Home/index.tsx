import { ArrowSquareUpRight } from 'phosphor-react'
import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'
import { useEffect, useState, FormEvent } from 'react'
import { api } from '../../lib/axios'
import {
  HeaderOfHome,
  HomeContainer,
  HomeContent,
  MainContent,
  SearchContainer,
} from './styles'
import { DistanceBetweenDate } from '../../utils/DistanceBetweenDates'
import { useIssue } from '../../hooks/usePost'
import { useNavigate } from 'react-router-dom'

interface GitHubProps {
  name: string
  login: string
  company?: string
  followers: number
  bio: string
}

interface IssuesItem {
  title: string
  body: string
  created_at: string
  comments: number
  id: number
  user: {
    login: string
  }
  html_url: string
}

interface Issues {
  total_count: number
  items: IssuesItem[]
}

export function Home() {
  const [informationAboutUser, setInformationAboutUser] = useState(
    {} as GitHubProps,
  )

  const { onShowPost } = useIssue()
  const [issues, setIssues] = useState<Issues>({} as Issues)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    api
      .get('users/Gabriel-Sousa')
      .then((response) =>
        setInformationAboutUser({ ...response.data, company: 'Google' }),
      )
  }, [])

  useEffect(() => {
    try {
      if (!informationAboutUser.login) {
        return
      }

      api
        .get(
          `search/issues?q=${search}%20repo:${informationAboutUser.login}/github-blog`,
        )
        .then((response) => setIssues(response.data))
    } catch (err) {
      alert(err)
    }
  }, [search, informationAboutUser])

  async function handleSubmitFilter(event: FormEvent) {
    event?.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    setSearch(data.filter as string)
  }

  function handlePost(dataPost: IssuesItem) {
    onShowPost(dataPost)
    return navigate('/post')
  }

  return (
    <HomeContainer>
      <HomeContent>
        <HeaderOfHome>
          <img src="https://github.com/Gabriel-Sousa.png" alt="" />
          <div>
            <div className="headerOfAbout">
              <span>{informationAboutUser.name}</span>
              <a href="https://github.com/Gabriel-Sousa" target="blank">
                <span>GITHUB</span>
                <ArrowSquareUpRight size={12} />
              </a>
            </div>
            <p>{informationAboutUser.bio}</p>
            <footer>
              <span>
                <FaGithub size={18} />
                {informationAboutUser.login}
              </span>

              {informationAboutUser.company && (
                <span>
                  <FaBuilding size={18} />
                  {informationAboutUser.company}
                </span>
              )}

              <span>
                <FaUserFriends size={18} />{' '}
                {informationAboutUser.followers === 0
                  ? informationAboutUser.followers + ' Seguidores'
                  : informationAboutUser.followers >= 2
                    ? informationAboutUser.followers + ' Seguidores'
                    : informationAboutUser.followers + ' Seguidor'}
              </span>
            </footer>
          </div>
        </HeaderOfHome>

        <SearchContainer onSubmit={handleSubmitFilter}>
          <div>
            <span>Publicações</span>
            <span>
              {issues.total_count}{' '}
              {issues.total_count === 1 ? 'Publicação' : 'Publicações'}
            </span>
          </div>
          <input type="search" placeholder="Buscar conteúdo" name="filter" />
        </SearchContainer>

        <MainContent>
          {issues.items?.length > 0 &&
            issues.items.map((item) => (
              <div
                className="card"
                key={item.id}
                onClick={() => handlePost(item)}
              >
                <div className="titleCard">
                  <span>{item.title}</span>
                  <span>{DistanceBetweenDate(item.created_at)}</span>
                </div>
                <p>{item.body}</p>
              </div>
            ))}
        </MainContent>
      </HomeContent>
    </HomeContainer>
  )
}
