import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  function handleParticipantAdd() {
console.log('Você clicou no botão adicionar')}

function handleParticipantRemove(name: string){
  console.log(`Voce removeu o participante ${name}`)
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
    <Participant name="Tomás Franco" onRemove={() => handleParticipantRemove('Tomá Franco')}/>
    <Participant name="Ingrid Flores" onRemove={() => handleParticipantRemove('Ingrid')}/>
    <Participant name="Edelvira Cristina" onRemove={() => handleParticipantRemove('Ingrid')}/>
    <Participant name="Afonso Aires" onRemove={() => handleParticipantRemove('Ingrid')}/>  
    
 
  </View>

  
  )
}