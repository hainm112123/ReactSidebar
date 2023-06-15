import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
