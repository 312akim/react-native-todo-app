import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        if (enteredGoal !== '') {
            props.onAddGoal(enteredGoal);
            setEnteredGoal('');
            props.closeModalHandler();
        } else {
            console.log("nothing entered");
        }
    }

    const onCancelHandler = () => {
        props.closeModalHandler();
        setEnteredGoal('');
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
                    <View style={styles.modalButton}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.modalButton}>
                        <Button title="Reset" onPress={props.resetGoalHandler} />
                    </View>
                    <View style={styles.modalButton}>
                        <Button title="Cancel" color="red" onPress={() => onCancelHandler()} />
                    </View>
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
        width: "60%",
    },
    modalButton: {
        flex: 1,
        marginHorizontal: 3,
    }
});

export default GoalInput;