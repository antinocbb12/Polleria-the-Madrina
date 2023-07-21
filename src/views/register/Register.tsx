import React from 'react'
import { View, Text, Image, TextInput,ToastAndroid,StyleSheet } from 'react-native'
import { RounderButton } from '../../componets/RounderButton';

export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
          <Image
          style={styles.imageBackground}
          source={require('../../../assets/chef.jpg')}/>
          <View style={styles.logoConteiner}>
            <Image 
            style={styles.logoimg}
            source={require('../../../assets/user_image.png')}
            />
            <Text style={styles.logotext}>select an image</Text>
          </View>
          <View style={styles.from}>
    
             <Text style={styles.fromText}>Register Here</Text>
    
             <View style={styles.fromImput}>
             <Image 
             style={styles.imgImput}
             source={require('../../../assets/user.png')}/>
             <TextInput style={styles.TexImput}
              placeholder='Nombre'
              keyboardType='default'
              />
             </View>
             <View style={styles.fromImput}>
             <Image 
             style={styles.imgImput}
             source={require('../../../assets/my_user.png')}/>
             <TextInput style={styles.TexImput}
              placeholder='Apellidos'
              keyboardType='default'
              />
             </View>
             <View style={styles.fromImput}>
             <Image 
             style={styles.imgImput}
             source={require('../../../assets/email.png')}/>
             <TextInput style={styles.TexImput}
              placeholder='Correo Electronico'
              keyboardType='email-address'
              />
             </View>
             <View style={styles.fromImput}>
             <Image 
             style={styles.imgImput}
             source={require('../../../assets/phone.png')}/>
             <TextInput style={styles.TexImput}
              placeholder='Phone'
              keyboardType='numeric'
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
              />
             </View>
             <View style={styles.fromImput}>
             <Image 
             style={styles.imgImput}
             source={require('../../../assets/confirm_password.png')}/>
             <TextInput style={styles.TexImput}
              placeholder='Contraseña'
              keyboardType='default'
              secureTextEntry={true}
              />
             </View>
             
             <View style={{marginTop:20}}>
             <RounderButton text='Enter' onPress={ () => ToastAndroid.show('HOla', ToastAndroid.SHORT)}/>
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
        height:'70%',
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
     top:'5%',
     alignItems: 'center'
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
       width:25,
       height:25,
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
 