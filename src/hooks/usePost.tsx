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
  const [dataPost, setDataPost] = useState({} as Issue)

  function onShowPost(data: Issue) {
    setDataPost(data)
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
