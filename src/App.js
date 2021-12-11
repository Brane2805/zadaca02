import './App.css';
const ime = 'Branimir';
const prezime = 'Matijacic';
const nekiText = (<span > Ovo je pisao </span>);
const nekiTextIvar = <div> { nekiText } <span> { ime } </span> </div > ;
const objeVar = <div> { ime } <span> { prezime } </span> </div > ;

    function App() {
            return ( 
            <div className = "App"> 
            { nekiTextIvar } 
            { objeVar }
            </div >);
            }

            export default App;