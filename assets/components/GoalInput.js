import { useState }from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}){
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function HandleInputGoal(enteredText){
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput}
            placeholder= 'Your Goal!'
            onChangeText={HandleInputGoal}
            value={enteredGoalText}
            />
            <Button 
            title="Add Goal"
            color={'#948979'}
            onPress={addGoalHandler}
            />
        </View>

    )

}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "AF8260"
    },

    textInput:{
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "80%",
        marginRight: 3,
        padding: 8,
        borderRadius: 5
    }
})