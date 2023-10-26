import './App.css'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import AllArticles from './components/AllArticles'

function App() {

  return (
    <main>
      <Nav/>
      <Routes>
        <Route path="/Articles" element={<AllArticles />} />
      </Routes>
    </main>
  )
}

export default App
