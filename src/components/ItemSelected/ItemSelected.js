import React from 'react';
import { View, StyleSheet, Image, Modal, Text, Button } from 'react-native';

const ItemSelected = (props) => {
  if (!props.selectedItem)
    return null;

  let selectedItem = props.selectedItem;
  return (
    <Modal animationType="slide" onRequestClose={props.itemClosed}>
      <View style={styles.container}>
        <Image style={styles.image} source={selectedItem.image} />
        <Text style={styles.itemName}>
          {selectedItem.name}
        </Text>
        <View style={styles.deleteButton}>  
          <Button 
            title="Delete"
            color="red"
            onPress={props.itemDeleted.bind(this, selectedItem.key)}
          />
        </View>
        <View style={styles.closeButton}>  
          <Button
            title="Close"
            onPress={props.itemClosed}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: 180
  },
  container: {
    alignItems: 'center',
    padding: 20
  },
  itemName: {
    marginTop: 20,
    fontSize: 20
  },
  deleteButton: {
    width: "100%",
    marginTop: 20
  },
  closeButton: {
    width: "100%",
    marginTop: 20
  }
});

export default ItemSelected;