import React from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';

function GoalInput(props) {

  const [goal, setGoal] = React.useState('');

  function goalInputHandler(value) {
    setGoal(value);
  }

  function addGoalHandler() {
    props.onAddGoal(goal);
    props.toggleModal();
    setGoal('');
  }

return (
  <Modal visible={props.visible} animationType="slide">
  <View style={styles.inputContainer}>
    <Image
      style={styles.image} 
      source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          value={goal}
          onChangeText={goalInputHandler} />
        <View style={styles.buttonContainer}>
        <Button
        color='#b180f0'
          onPress={addGoalHandler}
          title="Add Goal" /> 
        <Button
        color='#f31282'
          title='Cancel'
          onPress={props.toggleModal} />   
          </View>
      </View>
  </Modal>
)
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ccc',
    color:'#120438',
    width: '80%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  }
})

export default GoalInput;