import React , {useState} from 'react';
import {View, TextInput, Button, StyleSheet } from 'react-native';
const Searchbar = props => {



	return (

		<View style={styles.inputContainer}>
	        <TextInput 
	        placeholder="Search for Items" 
	        style={styles.input}
	    
	      
	        /> 
	          
       </View>

		);
};

const styles = StyleSheet.create({

inputContainer:{

    flexDirection:'row', 
    justifyContent:'center', 
    alignItems:'center',
	},

  input:{
    width:272   
    ,padding:10
	,borderRadius:10,
	backgroundColor:'white',
	},

})

export default Searchbar;