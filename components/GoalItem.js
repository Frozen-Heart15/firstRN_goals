import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

function GoalItem(props) {

  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressedItem} 
      onPress={()=>props.onDeleteGoal(props.id)}>
      <View style={styles.goalItem}>
        <Text
          style={styles.goalText}>
          {props.text}
        </Text>
      </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
    padding: 8,
  },
  goalText: {
    color: '#fff',
  },
  pressedItem: {
    opacity: 0.5,
  }
})

export default GoalItem;