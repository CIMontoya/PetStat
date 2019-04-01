import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    width: 260,
    height: 182,
    position: 'absolute',
    top: 100
  },
  signUp: {
    backgroundColor:'#F5F5F5',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    width: '57%',
    height: '10%',
    position: 'absolute',
    bottom: 280
  },
  sigUpText: {
    color:'#000',
    textAlign:'center',
    marginTop: '9%',
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
    bottom: 160
  },
  logInText: {
    color:'#FFF',
    textAlign:'center',
    marginTop: '9%',
    fontSize: 30
  },
  p: {
    fontSize: 22,
    textAlign:'center',
    position: 'absolute',
    bottom: 440
  }
})

module.exports = styles
