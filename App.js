import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/tasks';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Tasks */}
      <View style={styles.tasksWrapper}>
        {/* Title */}
        <Text style={styles.navTitle}>Tasks</Text>
        {/* Where Items will be displayed */}
        <View style={styles.items}>
          <Task text={'Task 1'} />
        </View>

      </View>

      <StatusBar style="auto" />
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
  },
  items:{},

});
