import logo from './logo.svg';
import './App.css';
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

function App() {
  return (
    
    app.get('/',(req,res)=>{
      res.json('Numbers : [1,2,3,5,8,13]')
    }
    )
  );
}

export default App;
