import './App.css'
import NextExample from "./components/I18Next_Example";
import GoogleTranslate from "./components/GoogleTranslate";
import Header from './components/Header';
import TranslateWithAPI from './components/TranslateWithAPI';
import GoogleTranslator from './components/GoogleTranslator';
import WithLocize from './components/WithLocize';

function App() {

  return (
    <div className="App">
      
      <GoogleTranslate />
      <Header />
      <NextExample />
      <TranslateWithAPI />
      <GoogleTranslator />
      <WithLocize />
      </div>
  );
}

export default App;
