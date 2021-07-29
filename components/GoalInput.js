import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        if (enteredGoal !== '') {
            // Better syntax, always ensures state is up to date.
            props.setCourseGoalsHandler(enteredGoal);
        //  setCourseGoals([...courseGoals, enteredGoal]);
    
            setEnteredGoal('');
        } else {
            console.log("nothing entered");
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Course Goal" 
            style={styles.input} 
            onChangeText={goalInputHandler}
            value={enteredGoal}  
            />
            <Button title="ADD" onPress={addGoalHandler} />
            <Button title="Reset" onPress={props.resetGoalHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
      },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default GoalInput;