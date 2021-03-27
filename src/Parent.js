import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      myStash: 42,
      luckysFood: 0,
    }
  }

  calculateFood = () => {
    this.setState({
      myStash: this.state.myStash - 1,
      luckysFood: this.state.luckysFood +1,
    })
  }


  render(){
    console.log('parent', this.props)
    return(
      <>
        <h2>Hi I'm Ryan, Lucky's Parent</h2>
        <p>I have a food stash for Lucky of {this.state.myStash} cups</p>
        <Child 
          luckysFood={this.state.luckysFood}
          calculateFood={this.calculateFood}
          showFavePic={this.props.showFavePic}
        />
      </>
    );

  }
}

export default Parent;
