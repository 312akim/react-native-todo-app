import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const resetGoalHandler = () => {
    setCourseGoals([]);
  }

  const setCourseGoalsHandler = (enteredGoal) => {
    // Better syntax, always ensures state is up to date.
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      // setCourseGoals([...courseGoals, enteredGoal]);
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const closeModalHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title={"Add new goal"} onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} resetGoalHandler={resetGoalHandler} onAddGoal={setCourseGoalsHandler} closeModalHandler={closeModalHandler}/>
      <View>
          <Text>Goals Below...</Text>
          <FlatList data={courseGoals} renderItem={itemData => (<GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 70,
  },
});

export default App;
