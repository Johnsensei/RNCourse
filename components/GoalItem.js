import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props){
    return(
        <View style={styles.listItem}>
            <Text style={styles.itemText}>{props.itemData.item.text}</Text>
            <Pressable
                style={({pressed}) => pressed ? styles.pressedItem : styles.minusPressable}
                onPress={props.deleteGoalHandler.bind(this, props.id)}
            >
                <Text style={styles.minusText}>-</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({

    listItem: {
        flexDirection: 'row',
        margin: 8,
        borderRadius: 6,
        padding: 8,
        backgroundColor: '#D5D5D5',
        alignContent: 'center'
    },
    itemText: {
        flex: 18,
        fontFamily: 'Thasadith_700Bold',
        color: '#DEA228',
    },
    minusPressable: {
        backgroundColor: '#FF0000',
        borderRadius: 15,
    },
    minusText: {
        flex: 1,
        color: '#FFFFFF',
        paddingHorizontal: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    pressedItem: {
        opacity: 0.5,
        backgroundColor: '#FF0000',
        borderRadius: 20,
    }
    
  });