import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/viniciusmendite.png',
      name: 'VinΓ­cius Mendite',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π' },
      { type: 'link', content: 'π jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-11-09 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/danielhessell.png',
      name: 'Daniel Hessel',
      role: 'Back-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π' },
      { type: 'link', content: 'π jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-11-11 20:00:00')
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
