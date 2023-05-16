import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default App;
