import React from 'react';

import {
  StyleSheet, 
  View, 
  Button,
  FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = React.useState([]);

  const [modal, setModal] = React.useState(false);

  function addGoalHandler(goal) {
    setGoals(prevGoals => ([
      ...prevGoals,
      {
        text: goal,
        id: Math.random().toString()
      },
    ]))
  }

  const deleteGoalHandler = (id) => {
    setGoals(previousGoals => previousGoals.filter(goal => goal.id !== id));
  }

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        onPress={toggleModal}
        title="Add New Goal"
        color="#5e0acc" />

    { modal && 
      <GoalInput
        visible={modal}
        toggleModal={toggleModal}
        onAddGoal={addGoalHandler}/>
    }
      <View style={styles.goalsContainer}>
          {/* <Text>Goals</Text> */}
        <FlatList
          data={goals}
          renderItem={item => {
            return (
              <GoalItem
                id={item.item.id}
                text={item.item.text}
                onDeleteGoal={deleteGoalHandler} />)
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
    backgroundColor: '#cccfff',
  },
  goalsContainer: {
    flex: 3,
  },
});
