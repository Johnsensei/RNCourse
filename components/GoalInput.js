import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Modal } from 'react-native';
import {useState} from 'react';


function GoalInput(props){


    return(
      <Modal
        visible={props.modalVisible}
        animationType='slide'
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your goal."
            onChangeText={props.goalInputHandler}
            value={props.enteredGoalText}
          />
          <View style={styles.buttonsRow}>
            <View style={styles.buttonSingle}>
              <Button
                title='Add Goal'
                onPress={props.addGoalHandler}
              />
            </View>
            <View style={styles.buttonSingle}>
              <Button
                title='Cancel'
                color='#E61145'
                onPress={props.hideModal}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      width: '80%',
      padding: 8,
    },
    buttonsRow: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',

    },
    buttonSingle: {
      margin: 10,
      width: '30%',
    }
    
  });