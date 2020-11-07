import React , {useState} from 'react';
import {View, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
const Categories = props => {

	return (
		<View style={styles.inputContainer}>
		  <ScrollView horizontal={true}  contentContainerStyle={styles.contentContainer}>
		<TouchableOpacity style={styles.input}>		
			<Button title="Category 1"  />        
        </TouchableOpacity>

        <TouchableOpacity style={styles.input}>		
			<Button title="Category 2"  />        
        </TouchableOpacity>

         <TouchableOpacity style={styles.input}>		
			<Button title="Category 2"  />        
        </TouchableOpacity>

         <TouchableOpacity style={styles.input}>		
			<Button title="Category 2"  />        
        </TouchableOpacity>

           <TouchableOpacity style={styles.input}>		
			<Button title="Category 2"  />        
        </TouchableOpacity>


        </ScrollView>
         </View>

		);
};

const styles = StyleSheet.create({

inputContainer:{

    flexDirection:'row', 
    justifyContent:'center',    
    backgroundColor:'#88D4E4',
    width:500,
    marginTop:20,
    padding:10,


	},

contentContainer: {
    paddingVertical: 0,
    paddingHorizontal:0,   

  },

  input:{
    width:45,
    height:45
    ,padding:10
    ,marginTop:10,
    marginRight:10
	,borderRadius:10,
	backgroundColor:'white',

	},

})

export default Categories;