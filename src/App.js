import React from 'react';
import './App.css';
import Parent from './Parent';
import Card from 'react-bootstrap/Card';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'none',
      src: 'https://placehold.it/500x100/444',
    }
  }

  showFavePic = (pic) => {
    this.setState({
      display: 'inline-block',
      src: pic,
    })
  }

  render(){
    return(
      <>
        <h1>This is from App</h1>
        <Card style={{ display: this.state.display, width: '40rem' }}>
          <Card.Img variant="top" src={this.state.src} />
        </Card>
        <Parent showFavePic={this.showFavePic}/>
      </>
    )
  }
}


export default App;
