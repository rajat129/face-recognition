import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation.js';
import './App.css';
import Logo from './components/Logo/Logo.js';
import Imagelinkform from './components/Imagelinkform/Imagelinkform';
import Signin from './components/signin/Signin';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Facerecognition from './components/facerecognition/Facerecognition';
import Register from './components/register/Register';

const app = new Clarifai.App({
  apiKey: '31299b3971224a79ab20aa6b3a19856c'
});  


class App extends Component {

constructor(){
  super();
  this.state = {
    input: '',
    imgurl: '',
    box: {},
    route: 'signin',
    issignin: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
  }
}

loaduser = (data) => {
  this.setState({user: {
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined
  }})
}

facelocation = (data) => {
  
  const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  
  return{
    leftcol: clarifaiface.left_col * width,
    toprow: clarifaiface.top_row * height,
    rightcol: width - (clarifaiface.right_col * width),
    bottomrow: height - (clarifaiface.bottom_row * height)
  }
}

displayfacebox = (boxe) => {
  console.log(boxe);
  this.setState({box: boxe});
}


onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onSubmit = () => {
  
  this.setState({imgurl: this.state.input});
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      if(response){
        fetch('http://localhost:3001/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count}))
        })
      }
      this.displayfacebox(this.facelocation(response))
    })
    .catch(err => console.log(err));
}

onroutechange = (route) => {
  if(route === 'signout'){
    this.setState({issignin: false})
  }else if(route === 'home'){
    this.setState({issignin: true})
  }
  this.setState({route: route});
}

render(){  
  return (
    <div className="App">
      <Particles className='particles'/>
      <Navigation issignin={this.state.issignin} onroutechange={this.onroutechange} />
      {this.state.route === 'home'
        ? <div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <Imagelinkform onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
            <Facerecognition box={this.state.box} imgurl={this.state.imgurl}/>
        </div>
        : (
          this.state.route === 'signin'
          ? <Signin loaduser={this.loaduser} onroutechange={this.onroutechange} />
          : <Register loaduser={this.loaduser} onroutechange={this.onroutechange} />
        )
        
        
      }
    </div>
  );
}
}
export default App;
