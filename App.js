import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputContainer from './src/components/InputContainer/InputContainer';
import PlaceShow from './src/components/PlaceShow/PlaceShow';
import image from './src/assets/beautiful-place.jpg';
import PlacesList from './src/components/PlacesList/PlacesList';
import ItemSelected from './src/components/ItemSelected/ItemSelected';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
    selectedItem: null
  };

  nameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });
  }

  submitHandler = () => {
    this.setState((prevState, props) => {
      if (prevState.placeName.trim().length === 0)
        return;
      
      let newObject = {
        name: prevState.placeName,
        image: image,
        key: Math.random().toFixed(5).toString()
      };

      return {
        places: [...prevState.places, newObject],
        placeName: ''
      };
    });
  }

  itemClicked = (key) => {
    for (let i = 0; i < this.state.places.length; i++) {
      let current = this.state.places[i];
      if (current.key === key) {
        this.setState({
          selectedItem: current
        });
      }
    }  
  }

  itemDeleted = (key) => {
    let newPlaces = [];
    for (let i = 0; i < this.state.places.length; i++) {
      let currentPlace = {...this.state.places[i]};
      if (currentPlace.key !== key) {
        newPlaces.push(currentPlace);
      }
    }
    this.setState({
      places: newPlaces,
      selectedItem: null
    });
  }

  itemClosed = () => {
    this.setState({
      selectedItem: null
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ItemSelected 
          selectedItem={this.state.selectedItem}
          itemDeleted={this.itemDeleted}
          itemClosed={this.itemClosed}
        />
        <InputContainer 
          nameChangeHandler={this.nameChangeHandler}
          placeName={this.state.placeName}
          submitHandler={this.submitHandler}
        />
        <PlacesList 
          placesList={this.state.places} 
          itemClicked={this.itemClicked}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: "100%"
  }
});
