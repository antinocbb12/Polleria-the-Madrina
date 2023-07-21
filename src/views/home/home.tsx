import React, {useState} from 'react'
import { Image, View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import { RounderButton } from '../../componets/RounderButton';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

function HomeScreen() {

  const [Email, setEmail] = useState('')
  const [Passoword, setPassword] = useState('')

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
          <Image
          style={styles.imageBackground}
          source={require('../../../assets/chef.jpg')}/>
          <View style={styles.logoConteiner}>
            <Image 
            style={styles.logoimg}
            source={require('../../../assets/logoMadrina.png')}
            />
            <Text style={styles.logotext}>La Madrina App</Text>
          </View>
          <View style={styles.from}>
    
             <Text style={styles.fromText}>Loing</Text>
    
             <View style={styles.fromImput}>
             <Image 
             style={styles.imgImput}
             source={require('../../../assets/email.png')}/>
             <TextInput style={styles.TexImput}
              placeholder='Correo Electronico'
              keyboardType='email-address'
              value={Email}
              onChangeText={Text => setEmail(Text)}
              />
             </View>
             
             <View style={styles.fromImput}>
             <Image 
             style={styles.imgImput}
             source={require('../../../assets/password.png')}/>
             <TextInput style={styles.TexImput}
              placeholder='Contraseña'
              keyboardType='default'
              secureTextEntry={true}
              value={Passoword}
              onChangeText={Text => setPassword(Text)}
              />
             </View>
             
             <View style={{marginTop:20}}>
             <RounderButton text='entrar' onPress={ () => {
              console.log('Email:'+ Email);
              console.log('Password:'+ Passoword);

             }}/>
             </View>

             <View style={styles.fromRegistro}> 
             <Text>No tienes Cuenta</Text>
             <TouchableOpacity onPress={()=> navigation.navigate('RegisterScreen')}> 
             <Text style={styles.fromRegistroText}>Registrate</Text>
             </TouchableOpacity>
            
             </View>
             
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
      },
      imageBackground: {
        width:'100%',
        height:'100%',
        opacity:0.7,
        bottom:'30%'
      },
      from: {
        width:'100%',
        height:'40%',
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        padding:30
      },
      logoConteiner: {
     position:'absolute',
     alignSelf:'center',
     top:'15%'
      },
      logoimg:{
      width:140,
      height:120,
      borderRadius: 50
      },
      logotext:{
        color:'white',
        textAlign:'center',
        fontSize:20,
        marginTop:10,
        fontWeight:'bold'
      },
      fromText:{
        fontWeight:'bold',
        fontSize:20
      },
      TexImput:{
        flex:1,
        borderBottomWidth:1,
        borderBottomColor:'#ffb703',
        marginLeft:30
      },
      fromImput: {
        flexDirection:'row',
        marginTop:30
      },
      imgImput:{
       width:35,
       height:35,
       marginTop:5
      },
      fromRegistro:
      {
       flexDirection:'row',
       justifyContent:'center',
       marginTop:20
      },
      fromRegistroText:
      {
        fontStyle:'italic',
        color:'orange',
        borderBottomWidth:1,
        borderBottomColor:'orange',
        fontWeight:'bold',
        marginLeft:15
      }
    });


export default HomeScreen