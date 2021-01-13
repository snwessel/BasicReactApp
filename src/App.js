import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/MainNavbar';
import Resources from './components/Resources';
import Schedule from './components/Schedule';
import Team from './components/Team';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Schedule />
      <Resources />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
