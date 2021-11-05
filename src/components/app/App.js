import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../footer/footer"
import Intro from "../intro/header"
import Projects from "../projects/projects"

function App() {
  return (
    <div className="App">
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
