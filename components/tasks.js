import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Task = (newTask) => {
    
    return ( 
        <View style={styles.item}> 
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{newTask.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 24,
        height: 25,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
    },
    itemText:{
        maxWidth: '80%'

    },
    circular:{
        borderRadius: 5,
        borderWidth2,
        borderColor: 'black',
        width: 12,
        height: 12,
    },

})
 
export default Task;