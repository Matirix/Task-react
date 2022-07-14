import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/tasks';


export default function App() {

  const [task, setTask] = useState('');
  const [taskItems, setTaskItem] = useState([]);

  const handleAddTask = () => {
    console.log(task)
    // Takes the text from task and adds it onto to the list of taskItems
    setTaskItem([...taskItems, task]);
    // Resets the task to null
    setTask('');
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1)
    setTaskItem(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Tasks */}
      <View style={styles.tasksWrapper}>
        {/* Title */}
        <Text style={styles.navTitle}>Tasks</Text>
        {/* Where Items will be displayed */}
        <View style={styles.items}>
        
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>
      {/* Make a new Task */}
      <KeyboardAvoidingView
        /* Pushes everything up instead of covering*/
        behavior = {Platform.OS === "ios" ? "padding" : "height" }
        style= {styles.writeTaskWrapper}>
          {/* State changes when text changes */}
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        {/* Adds to list of tasks. Touchable Opacity is akin to button*/}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addwrapper}>
            <Text> + </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  navTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  items:{},
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  addwrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center', 
    fontSize: 24
  },

});
