import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importar iconos de MaterialIcons
import { useNavigation } from '@react-navigation/native';


const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text> {/* Agregar el título de la pantalla */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Idioma')}>
          <Icon name="language" size={24} color="#333" style={styles.buttonIcon} /> {/* Agregar un icono */}
          <Text style={styles.buttonText}>Idioma</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tema')}>
          <Icon name="palette" size={24} color="#333" style={styles.buttonIcon} /> {/* Agregar un icono */}
          <Text style={styles.buttonText}>Tema</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Seguridad')}>
          <Icon name="security" size={24} color="#333" style={styles.buttonIcon} /> {/* Agregar un icono */}
          <Text style={styles.buttonText}>Seguridad y privacidad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32, // Agregar un margen inferior para separar el título de los botones
  },
  buttonsContainer: {
    width: '60%', // Establecer el ancho del contenedor de los botones al 60% de la pantalla
    alignItems: 'flex-start', // Alinear los botones a la izquierda
  },
  button: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%', // Establecer el ancho de cada botón al 100% del ancho del contenedor
    flexDirection: 'row', // Alinear el icono y el texto horizontalmente
    alignItems: 'center', // Alinear el icono y el texto verticalmente
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 16, // Agregar un margen izquierdo al texto para separarlo del icono
  },
  buttonIcon: {
    marginRight: 16, // Agregar un margen derecho al icono para separarlo del texto
  },
});
export default SettingsScreen;

