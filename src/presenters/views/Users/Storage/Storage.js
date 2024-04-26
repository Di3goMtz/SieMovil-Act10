import * as FileSystem from 'expo-file-system';
import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { NameInput, InputControl, InputHoraFin, InputHoraInicio, HomeButton} from '../../../../components/InputsTextAndButton/InputTextAndButtons';

const Storage = () => {
  const [Name, setName] = useState('');
  const [NumControl, setNumControl] = useState('');
  const [HoraInicio, setHoraInicio] = useState('');
  const [HoraFin, setHoraFin] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const filePath = FileSystem.documentDirectory + 'tasks.json';

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const info = await FileSystem.getInfoAsync(filePath);
        if (info.exists) {
          const storedTasks = await FileSystem.readAsStringAsync(filePath);
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Error al recuperar tareas', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddOrUpdateTask = async () => {
    try {
      if (selectedTaskIndex !== null) {
        // Actualizar tarea existente
        const updatedTask = { Name, NumControl, HoraInicio, HoraFin };
        const updatedTasks = [...tasks];
        updatedTasks[selectedTaskIndex] = updatedTask;
        await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        setSelectedTaskIndex(null);
      } else {
        // Agregar nueva tarea
        const newTask = { Name, NumControl, HoraInicio, HoraFin };
        const updatedTasks = [...tasks, newTask];
        await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
      }
      // Limpiar campos de entrada
      setName('');
      setNumControl('');
      setHoraInicio('');
      setHoraFin('');
    } catch (error) {
      console.error('Error al guardar tarea', error);
    }
  };

  const handleDeleteTask = async (index) => {
    try {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al eliminar tarea', error);
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setSelectedTaskIndex(index);
    setName(taskToEdit.Name);
    setNumControl(taskToEdit.NumControl);
    setHoraInicio(taskToEdit.HoraInicio);
    setHoraFin(taskToEdit.HoraFin);
  };

  return (
    <View style={styles.container}>
      <NameInput value={Name} onChangeText={setName}/>
      <InputControl value={NumControl} onChangeText={setNumControl}/>
      <InputHoraInicio value={HoraInicio} onChangeText={setHoraInicio}/>
      <InputHoraFin value={HoraFin} onChangeText={setHoraFin} />
      <HomeButton title={selectedTaskIndex !== null ? 'Actualizar' : 'Agregar'} onPress={handleAddOrUpdateTask}></HomeButton>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.Name}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Eliminar" onPress={() => handleDeleteTask(index)} color="#C40213"/>
              <Button title="Editar" onPress={() => handleEditTask(index)} color="#040893"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 50,
  },
  input: {
    width: 400,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop: 20,
  },
  taskText: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default Storage;