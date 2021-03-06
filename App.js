import { StyleSheet, View, Button, FlatList, Image } from 'react-native';
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
  const [modalVisible, setModalVisible] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  };

  function addGoalHandler() {
    setGoals(currentGoals =>
      [...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
      setEnteredGoal('');
      setModalVisible(false);
  };

  function deleteGoalHandler(id){
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    });
  };

  function showModal () {
    setModalVisible(true);
  }

  function hideModal () {
    setModalVisible(false);
  }

  if (!fontsLoaded){
    return <AppLoading />
  } else {
    return (
      <View style={styles.appContainer}>
        <Image
            style={styles.bannerImage}
            source={require('./img/banner.png')}
          />
        
        <Button
          title='Add New Festival Goal'
          color='#FA9663'
          onPress={showModal}
          
        />

          <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          enteredGoalText={enteredGoalText}
          modalVisible={modalVisible}
          hideModal={hideModal}
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
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  bannerImage: {
    width: '90%',
    margin: 20,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
  
});
