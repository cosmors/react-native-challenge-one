import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }
    setTasks(prev => [...prev, newTask])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const taskMarked = tasks.find(element => element.id === id)
    taskMarked ? taskMarked.done = !taskMarked.done : ''
    const newList = tasks.filter(element => element.id !== id)
    const result = [...newList, taskMarked]
    setTasks(result)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(prev => prev.filter(element => element.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})