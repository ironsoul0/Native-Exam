import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PlaceShow = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.itemClicked.bind(this, props.place.key)}>
      <View style={styles.placeShow}>
        <Image
          source={props.place.image}
          style={styles.image}
        />
        <Text style={styles.text}>
          {props.place.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeShow: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: "100%",
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  text: {
    fontSize: 15
  },
  container: {
    marginTop: 10
  }
});

export default PlaceShow;