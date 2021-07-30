import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        if (enteredGoal !== '') {
            // Better syntax, always ensures state is up to date.
            props.onAddGoal(enteredGoal);
        //  setCourseGoals([...courseGoals, enteredGoal]);
    
            setEnteredGoal('');
        } else {
            console.log("nothing entered");
        }
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="Course Goal" 
                style={styles.input} 
                onChangeText={goalInputHandler}
                value={enteredGoal}  
                />
                <View style={styles.buttonContainer}>
                    <Button title="ADD" onPress={addGoalHandler} />
                    <Button title="Reset" onPress={props.resetGoalHandler} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
      },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
});

export default GoalInput;