import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import { 
  Thasadith_400Regular,
  Thasadith_400Regular_Italic,
  Thasadith_700Bold,
  Thasadith_700Bold_Italic 
} from '@expo-google-fonts/thasadith';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [enteredGoalText, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);
  let [fontsLoaded] = useFonts({
    Thasadith_400Regular,
    Thasadith_700Bold
  });

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  };

  function addGoalHandler() {
    setGoals(currentGoals =>
      [...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
      setEnteredGoal('');
  };

  function deleteGoalHandler(id){
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    });
  };

  if (!fontsLoaded){
    return <AppLoading />
  } else {
    return (
      <View style={styles.appContainer}>
        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          enteredGoalText={enteredGoalText}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={goals}
            renderItem={(itemData) => {
              return(
                <GoalItem
                  itemData={itemData}
                  deleteGoalHandler={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            />
        </View>
      </View>
    ); //End of return
  }

  

}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
  listItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: '#D5D5D5',
  },
  itemText: {
    fontFamily: 'Thasadith_700Bold',
    color: '#DEA228',
  }
  
});
