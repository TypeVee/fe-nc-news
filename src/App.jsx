import './App.css'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import AllArticles from './components/AllArticles'
import Article from './components/Article';

function App() {

  return (
    <main>
      <Nav/>
      <Routes>
        <Route path="/Articles" element={<AllArticles />}/>
        <Route path="/Article/:article_id" element={<Article/>}/>
      </Routes>
    </main>
  )
}

export default App
