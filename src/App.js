
import './App.css';
import FoodList from './components/list/List';
import ButtonCounter from './components/button';
import Accordion from './components/accordion';
import ContactForm from './components/contactForm';



function App() {
  return (
    <div className="App">
   <FoodList/>
   <ButtonCounter/>
    <Accordion />
    <ContactForm />
    </div>
  );
}

export default App;
