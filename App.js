import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const resetGoalHandler = () => {
    setCourseGoals([]);
  }

  const setCourseGoalsHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput resetGoalHandler={resetGoalHandler} setCourseGoalsHandler={setCourseGoalsHandler} />
      <View>
          <Text>Goals Below...</Text>
          <FlatList data={courseGoals} renderItem={itemData => (<GoalItem title={itemData.item.value} />)} />
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
