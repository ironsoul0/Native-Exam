import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import PlaceShow from '../PlaceShow/PlaceShow';

const PlacesList = (props) => {
  let placesList = props.placesList;

  const renderingProcess = (single) => {
    const place = single.item;
    return <PlaceShow itemClicked={props.itemClicked} place={place} />;
  }

  return (
    <FlatList
      style={styles.list}
      data={placesList}
      renderItem={renderingProcess}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    marginTop: 15
  }
});

export default PlacesList;