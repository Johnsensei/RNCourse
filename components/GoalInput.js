import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import {useState} from 'react';


function GoalInput(props){

    // const [enteredGoalText, setEnteredGoal] = useState('');

    // function goalInputHandler(enteredText) {
    //     setEnteredGoal(enteredText);
    //   };

    return(
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your goal."
            onChangeText={props.goalInputHandler}
            value={props.enteredGoalText}
          />
          <Button
            title='Add Goal'
            onPress={props.addGoalHandler}
          />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      width: '70%',
      marginRight: 8,
      padding: 8,
    },
    
  });