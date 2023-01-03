import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#b18d9f',
    padding: 24
  },
  eventName: {
    color: '#3F1229',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#3F1229',
    fontSize: 18,
    marginTop: 24
  },
  typeService: {
    color: '#3F1229',
    fontSize: 16,
    textDecorationLine: "underline"
  },
  input:{
    flex: 1,
    height:56,
    backgroundColor: '#682343',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#682343",
    alignItems: "center",
    justifyContent: "center"  
  },
  serviceForm: {
    width: '100%',
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 10
  },
  serviceEnvironment: {
    width: '100%',
    flexDirection: "row",    
    marginBottom: 42
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'  
  }
})