import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    width: 260,
    height: 182,
    position: 'absolute',
    top: 50
  },
  signUp: {
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    width: '57%',
    height: '10%',
    position: 'absolute',
    bottom: 240
  },
  signUpText: {
    color:'#000',
    textAlign:'center',
    marginTop: '8%',
    fontSize: 30
  },
  logIn: {
    backgroundColor: '#033477',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    width: '57%',
    height: '10%',
    position: 'absolute',
    bottom: 120
  },
  logInText: {
    color:'#FFF',
    textAlign:'center',
    marginTop: '8%',
    fontSize: 30
  },
  p: {
    fontSize: 22,
    textAlign:'center',
    position: 'absolute',
    bottom: 390
  },
  header: {
    fontSize: 50,
    color: "#033477",
    position: "absolute",
    top: 40,
  },
  username: {
    fontSize: 28,
    textAlign:'center',
    marginTop: 20
  },
  password: {
    fontSize: 28,
    textAlign:'center',
    marginTop: 20
  },
  usernameInput: {
    marginTop: 18,
    width: 250,
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 8,
    fontSize: 20
  },
  passwordInput: {
    marginTop: 18,
    width: 250,
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 8,
    fontSize: 20
  },
  loginForm: {
    backgroundColor: "#F5F5F5",
    position: "absolute",
    top: 160,
    left: 40,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    width: 300,
    height: 430
  },
  loginButton: {
    backgroundColor: '#033477',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    width: 150,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 65
  },
  house: {
    backgroundColor: "#033477",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    marginBottom: 50
  },
  headerUser: {
    fontSize: 50,
    color: "#033477",
    position: "absolute",
    top: 100,
  },
  activityInfo: {
    height: 50,
    width: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  activity: {
    backgroundColor: "#033477",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    marginBottom: 50
  },
  userInfo: {
    backgroundColor: "#F5F5F5",
    position: "absolute",
    top: 160,
    left: 40,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    width: 300,
    height: 385
  },
  h3: {
    fontSize: 30,
    marginTop: 20
  },
  p2: {
    fontSize: 25
  },
  addHouse: {
    backgroundColor: '#fff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addHouse2: {
    backgroundColor: '#033477',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 300,
    left: 25
  },
  houseInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  houseQuant: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 20
  },
  smallBut: {
    width: 125,
    height: 30,
    backgroundColor: "#fff",
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 5
  },
  h4: {
    fontSize: 40,
    margin: 5
  },
  activitySubmit: {
    backgroundColor: '#033477',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40
  },
  petSubmit: {
    backgroundColor: '#033477',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40
  },
  petName: {
    backgroundColor: "#033477",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 60
  },
  addPet: {
    backgroundColor: '#fff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  }
})

module.exports = styles
