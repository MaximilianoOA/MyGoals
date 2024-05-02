import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const[enteredGoalText, setEnteredGoalText]= useState('')
  const[goals, setGoals]= useState('')

  function handleInputGoal(enteredText) {
    console.log(enteredText)
    setEnteredGoalText(enteredText)
  }

  function handleAddGoal(){
    console.log(entredGoal)
    setGoals(() => [ goals, {text: enteredGoalText, key: Math.random().toString()}])
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.TextInput}
          placeholder = 'Your Goal!'
          onChangeText={handleInputGoal}
        />
        <Button
          title='Add Goal'
          color={'#704264'}
          onPress={handleAddGoal}
        />

      </View>
      <View style={styles.goalsContainer}>
      <FlatList>
        data={goals}
        renderItem={(ItemData) =>{
          <View style={styles.goalsItem}>
            <Text style={styles.goalsText}>
              {ItemData.item.text}
            </Text>
          </View>
        }}
      </FlatList>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  inputContainer:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "135D66",
  },

  btnGoal:{
    borderRadius: 20,
    backgroundColor: "#ccccc",
  },

  TextInput:{
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 3,
    padding: 8,
    borderRadius: 5,
  },

  goalsContainer:{
    flex: 5
  },

  goalsItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "8576FF",
    color: "white",
  },

  goalsText:{
    color: "white"
  },
});
