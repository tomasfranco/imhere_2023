import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './styles';
import { Servico } from '../../components/servico';
import { Ambiente } from '../../components/ambiente';

export function Home() {
  const [servico, setServico] = useState<string[]>([]);
  const [servicoName, setServicoName] = useState('');

  const [ambiente, setAmbiente] = useState<string[]>([]);
  const [nomeAmbiente, setNomeAmbiente] = useState('')
  
function handleServicoAdd() {
    if(servico.includes(servicoName)){
      return Alert.alert('Participante existe', 'Já existe um participante na lista com este nome')
    }

    setServico(prevState => [...prevState, servicoName])
    setServicoName('')
}
function handleServicoConcluded(name: string){

  Alert.alert("Serviço Concluído ✅", `${name} concluido com sucesso!`, [
    {
    text: 'Sim',
    onPress: () => setServico( prevState => prevState.filter(servico => servico !== name))
    },
    {
      text: 'Não',
      style: 'cancel'
    }
  ]); 
}

function handleAmbienteAdd() {
    if(ambiente.includes(nomeAmbiente)){
      return Alert.alert('Ambiente Repetido', 'Já existe um ambiente com este nome')
    }

    setAmbiente(prevState => [...prevState, nomeAmbiente])
    setNomeAmbiente('')
}

function handleAmbientConcluded(name: string){

  Alert.alert("Serviço Concluído ✅", `${name} concluido com sucesso!`, [
    {
    text: 'Sim',
    onPress: () => setAmbiente( prevState => prevState.filter(ambiente => ambiente !== name))
    },
    {
      text: 'Não',
      style: 'cancel'
    }
  ]); 
}

  return(
    <View style={styles.container}>
    <Text style={styles.eventName}>Cliente: Ingrid Flores</Text> 

    <Text style={styles.eventDate}
    >Quarta Feira, 29 de Dezembro de 2022</Text>

    <Text style={styles.typeService}
    >Tipo de Serviço: Integral 8h</Text>

   <View style={styles.serviceForm}>
    <TextInput    
      style={styles.input}
      placeholder="Adicionar Serviço"
      placeholderTextColor="#c4aab7"
      onChangeText={setServicoName}
      value={servicoName}
    />

    <TouchableOpacity style={styles.button} onPress={handleServicoAdd}>
      <Text style={styles.buttonText}>
        +
      </Text>
    </TouchableOpacity>
    </View>  
    <View style={styles.serviceEnvironment}>  
    <TextInput    
      style={styles.input}
      placeholder="Adicionar Ambiente"
      placeholderTextColor="#c4aab7"
      onChangeText={setNomeAmbiente}
      value={nomeAmbiente}
    />

    <TouchableOpacity style={styles.button} onPress={handleAmbienteAdd}>
      <Text style={styles.buttonText}>
        +
      </Text>
    </TouchableOpacity>
    </View>
    <FlatList 
      data={servico}
      keyExtractor={item => item}
      renderItem={({ item }) => (     
        <Servico
        key={item}
        name={item}
        onRemove={() => handleServicoConcluded(item)}        
        />    
      )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum serviço em sua lista de prioridades? Adicione suas prioridades em sua lista!
          </Text>
        )}
      />      
  </View> 
  )
}