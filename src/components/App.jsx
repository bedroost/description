/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Title from './Title';
import List from './List';
import Info from './Info';
// import Hometype from './HomeType';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.location = props.location;
    this.state = undefined; 
    // this.renderAmenities = this.renderAmenities.bind(this);
  }

  componentDidMount() {
    this.getDescription();
  }
  
  getDescription() {
    axios.get('/rooms/162725')
      .then((response) => {
        this.setState({
          listingInfo: response.data,
        });
      })
      // .then(() => console.log(this.state.listingInfo.amenities.basic))
      .catch((err) => {
        console.log(err);
      });
  }
  

  // renderAmenities(obj) {
  //   console.log(obj);
  //   const keys = Object.keys(obj);
  //   keys.map((key) => (
  //     <div>
  //       {key}
  //       <span>{obj[key]}</span>
  //     </div>
  //   ));
  // }
 
  render() {
    if (this.state) {
    // console.log(this.s}tate.listingInfo.amenities);
      return (
        <div>
          <Title title={this.state.listingInfo.title} city={this.state.listingInfo.city} />
          {/* <Hometype hometype={this.state.listingInfo.hometype} /> */}
          <Info about={this.state.listingInfo.description} more={this.state.listingInfo.readMore} />
          <List amenities={this.state.listingInfo.amenities} />   
        </div>
      ); 
    }
    return null; 
  }
} 

export default App;
