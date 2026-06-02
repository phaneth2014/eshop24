import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer';

const App = () => {
  React.useEffect(() => {
    document.title = import.meta.env.VITE_APP_NAME || 'React App'
  });
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
