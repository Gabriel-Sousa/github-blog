import { createContext, ReactNode, useContext, useState } from 'react'

interface Issue {
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

interface IssuesContextType {
  dataPost: Issue
  onShowPost(data: Issue): void
}

interface IssueContextProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function PostContextProvider({ children }: IssueContextProviderProps) {
  const [dataPost, setDataPost] = useState(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@github-blog:post-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return {} as Issue
  })

  function onShowPost(data: Issue) {
    setDataPost(data)

    const stateJSON = JSON.stringify(data)

    localStorage.setItem('@github-blog:post-state-1.0.0', stateJSON)
  }

  return (
    <IssuesContext.Provider value={{ dataPost, onShowPost }}>
      {children}
    </IssuesContext.Provider>
  )
}

export function useIssue(): IssuesContextType {
  const context = useContext(IssuesContext)

  return context
}
