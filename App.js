import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

export default function App() {
  const [listItem, setListItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const addItem = () => {
    const itemToAdd = listItem;
    setListItem("");
    setItemList([...itemList, {key: itemToAdd}]);
  }

  const clearList = () => {
    setItemList([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}} onChangeText={listItem => setListItem(listItem)}  value={listItem}/>

      <View style={styles.buttons}>
        <Button title="ADD" onPress={() => addItem()}/>
        <Button title="CLEAR" onPress={() => clearList()}/>
      </View>
      
      <Text style={{fontSize: 20, color: "#005b96"}}>Shopping List</Text>
      <FlatList
          data={itemList}
          renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: "row", 
    width: 150,
    marginTop: 20,
    marginBottom: 30,
    justifyContent: "space-around",
    alignItems: "flex-start"
  }
});
