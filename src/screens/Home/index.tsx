import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = [
    'Rodrigo',
    'Fernando',
    'Ingrid',
    'Fábio',
    'Kardsley',
    'Henrique',
    'Afonso',
    'Edelvira',
    'Ana Raquel',
    'Sylvia',
    'José',
    'João'
  ]
  
  function handleParticipantAdd() {
    if(participants.includes("")){
      
    }
}

function handleParticipantRemove(name: string){
  Alert.alert("Remover", `Remover o participante ${name}?`, [
    {
    text: 'Sim',
    onPress: () => Alert.alert("Deletado com sucesso!")
    },
    {
      text: 'Não',
      style: 'cancel'
    }
  ]); 
}

  return(
    <View style={styles.container}>
    <Text style={styles.eventName}>Nome do evento</Text> 

    <Text style={styles.eventDate}
    >Quarta, 29 de Dezembro de 2022</Text>

   <View style={styles.form}>
    <TextInput    
      style={styles.input}
      placeholder="Nome do participante"
      placeholderTextColor="#6b6b6b"
    />

    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
      <Text style={styles.buttonText}>
        +
      </Text>
    </TouchableOpacity>
    </View>    

    <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant
        key={item}
        name={item}
        onRemove={() => handleParticipantRemove(item)}        
        />
      )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes em sua lista de presença;
          </Text>
        )}
      />      
  </View> 
  )
}