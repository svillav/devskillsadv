import './App.css';
import { Form, Footer, Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className='h-full bg-gray-900'>
        <Form />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
