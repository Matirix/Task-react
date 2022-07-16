import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/tasks';
import * as Progress from 'react-native-progress'
//Firebase stuff
import { initializeApp} from 'firebase/app'
import firebaseConfig from './index'
import { getFirestore, collection, query, where, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";


// ---------------------------
// init firebase app
initializeApp(firebaseConfig)

// initservices
const db = getFirestore()

// collection ref
const colRef = collection(db, 'Goals')
// ---------------------------


export default function App() {
  //For user ever-changing input
  const [task, setTask] = useState('');
  //Task item is stored when user presses button
  const [taskItems, setTaskItem] = useState([]);
  const [exp, newExp] = useState(0.01);
  const [level, newLevel] = useState(1)

  //TaskItems to get tasks from the database
  // useEffect(() => {
  //   getDocs(colRef)
  //   .then((snapshot) => {
  //     //--------------Does not seem to include the id with the docs .data-----------
  //           //Maps all the documents and puts it into a list
  //     // snapshot.docs.map((docs) => documents.push(docs.data(), {id: docs.id}))

  //     // Gets all the documents + it's id and puts it into a list
  //     const documents = []
  //     snapshot.docs.forEach((doc) => {
  //       documents.push({...doc.data(), id: doc.id})
  //     });  
  //     setTaskItem(documents)
  //     // console.log(documents)
  //   })
  //   .catch(err => {
  //     console.log(err.message)
  //   })
  // }, [])



  useEffect(() => {
    console.log("working EXP")
    if (exp > 1) {
      newExp(0.01)
      newLevel(level + 1)
    }
  }, [exp])


  const handleAddTask = () => {
    if (!task) {return} 
    // Takes the text from task and adds it onto to the list of taskItems
    setTaskItem([...taskItems, task]);
    //Add to Firestore
    addDoc(colRef, {
      Goal: task,
    })
    // Resets the task to null
    setTask('');
  }

  const completeTask = (id) => {
    //Takes the db, the collection it's in and the id of the document
    const docRef = doc(db, 'Goals', id)
    //Deletes a task
    deleteDoc(docRef)

    // Progress bar, values can be changed dynamically later
    newExp(exp + 0.2)
  }



  return (
    <View style={styles.container}>
      {/* Tasks */}
      <View style={styles.tasksWrapper}>
        {/* Title */}
        <Text style={styles.navTitle}>Tasks</Text>
        <View style={styles.level}>
          <Text style={styles.leveltext}>Level: {level}</Text>
        </View>
        <Progress.Bar style={styles.progressBar} progress={exp} width={null}  height={10} borderWidth={0.1}/>

        {/* How Items will be displayed */}
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(item.id)}>
                  <Task text={item.Goal}/>
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
  level: {
    // borderRadius: 50,
    // border: 'solid',

  },
  leveltext: {
    fontSize: 25,
    backgroundColor: "",
    borderRadius: 50,
    margin: '5px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progressBar: {
    marginBottom: 20,
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
