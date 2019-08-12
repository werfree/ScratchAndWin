/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert,StyleSheet, ToastAndroid, Text, View,TouchableOpacity,Dimensions} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from 'react-native-vector-icons/Entypo';
import { Button } from 'native-base';


//get Array[25]

var itemArray=new Array(25).fill("empty");

export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state={
        randomNumber:"",
        reload:true,
        count:5
    };

    this.generateRandomNumber=this.generateRandomNumber.bind(this);
    this.scratchItem=this.scratchItem.bind(this);
    this.scratchItemColor=this.scratchItemColor.bind(this);
    this.scratchItemIcon=this.scratchItemIcon.bind(this);
    //this.resetGame=this.resetGame.bind(this);
    this.showAllItem=this.showAllItem.bind(this);

  }

  //when app loads
  componentDidMount(){
    // call Generate Random Number method
    this.generateRandomNumber();
    
  }

  generateRandomNumber(){
    //generate random number
    let randomNumber= Math.floor(Math.random()*25);
    this.setState({randomNumber,isScratched:true});
    }

  scratchItem(itemNumber){
    //lucky or unlucky
    if(this.state.count==0){
      ToastAndroid.show("Chance Over..Please Click Show All or Reset",ToastAndroid.LONG);
    }

    else{
      this.setState({count:(this.state.count)-1});
      let a=this.state.count-1;
      ToastAndroid.show(a.toString()+" more chance left",ToastAndroid.SHORT);
    if(this.state.randomNumber === itemNumber){
      itemArray[itemNumber]="lucky";
      this.setState({count:0});
      Alert.alert("You Are a Lucky Guy","Luck is not chance, it's toil; fortune's expensive smile is earned");
    }
    else{
      
      itemArray[itemNumber]="unlucky";
    }
    this.forceUpdate;
    this.setState({reload:!(this.state.reload)});
  }
  }

  scratchItemIcon(itemNumber){
    //Find Icon
    if(itemArray[itemNumber]==="lucky"){
      return "dollar";
    }
    else if(itemArray[itemNumber]==="unlucky"){
      return "frown-o";
    }
    return "circle";
    
    
    
  }

  scratchItemColor(itemNumber){
    //Find color
    if(itemArray[itemNumber]==="lucky"){
      return "green";
    }
    else if(itemArray[itemNumber]==="unlucky"){
      return "red";
    }
    return "blue";
  }

  showAllItem(){
    //Show All Icons
    itemArray.fill("unlucky");
    itemArray[this.state.randomNumber]="lucky";
    this.forceUpdate;
    this.setState({reload:!(this.state.reload),count:0});
  }

   resetGame(){

    this.setState({randomNumber:this.generateRandomNumber()},
    ()=>{
      itemArray.fill("empty");
      this.generateRandomNumber();
      this.forceUpdate;
      this.setState({reload:!(this.state.reload),count:5});
    }
    )

  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topText}>Scratch And Win</Text>

          <View style={styles.grid}>
            <View style={styles.itemRow}>
              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(0)}}>

                <FontAwesome
                name={this.scratchItemIcon(0)}
                size={50}
              color={this.scratchItemColor(0)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(1)}}>

                <FontAwesome
                name={this.scratchItemIcon(1)}
                size={50}
              color={this.scratchItemColor(1)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(2)}}>

                <FontAwesome
                name={this.scratchItemIcon(2)}
                size={50}
              color={this.scratchItemColor(2)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(3)}}>

                <FontAwesome
                name={this.scratchItemIcon(3)}
                size={50}
              color={this.scratchItemColor(3)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(4)}}>

                <FontAwesome
                name={this.scratchItemIcon(4)}
                size={50}
              color={this.scratchItemColor(4)}
              />
              </TouchableOpacity>
              
              </View>


              <View style={styles.itemRow}>
              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(5)}}>

                <FontAwesome
                name={this.scratchItemIcon(5)}
                size={50}
              color={this.scratchItemColor(5)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(6)}}>

                <FontAwesome
                name={this.scratchItemIcon(6)}
                size={50}
              color={this.scratchItemColor(6)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(7)}}>

                <FontAwesome
                name={this.scratchItemIcon(7)}
                size={50}
              color={this.scratchItemColor(7)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(8)}}>

                <FontAwesome
                name={this.scratchItemIcon(8)}
                size={50}
              color={this.scratchItemColor(8)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(9)}}>

                <FontAwesome
                name={this.scratchItemIcon(9)}
                size={50}
              color={this.scratchItemColor(9)}
              />
              </TouchableOpacity>
              
              </View>


              <View style={styles.itemRow}>
              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(10)}}>

                <FontAwesome
                name={this.scratchItemIcon(10)}
                size={50}
              color={this.scratchItemColor(10)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(11)}}>

                <FontAwesome
                name={this.scratchItemIcon(11)}
                size={50}
              color={this.scratchItemColor(11)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(12)}}>

                <FontAwesome
                name={this.scratchItemIcon(12)}
                size={50}
              color={this.scratchItemColor(12)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(13)}}>

                <FontAwesome
                name={this.scratchItemIcon(13)}
                size={50}
              color={this.scratchItemColor(13)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(14)}}>

                <FontAwesome
                name={this.scratchItemIcon(14)}
                size={50}
              color={this.scratchItemColor(14)}
              />
              </TouchableOpacity>
              
              </View>


              <View style={styles.itemRow}>
              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(15)}}>

                <FontAwesome
                name={this.scratchItemIcon(15)}
                size={50}
              color={this.scratchItemColor(15)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(16)}}>

                <FontAwesome
                name={this.scratchItemIcon(16)}
                size={50}
              color={this.scratchItemColor(16)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(17)}}>

                <FontAwesome
                name={this.scratchItemIcon(17)}
                size={50}
              color={this.scratchItemColor(17)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(18)}}>

                <FontAwesome
                name={this.scratchItemIcon(18)}
                size={50}
              color={this.scratchItemColor(18)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(19)}}>

                <FontAwesome
                name={this.scratchItemIcon(19)}
                size={50}
              color={this.scratchItemColor(19)}
              />
              </TouchableOpacity>
              
              </View>


              <View style={styles.itemRow}>
              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(20)}}>

                <FontAwesome
                name={this.scratchItemIcon(20)}
                size={50}
              color={this.scratchItemColor(20)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(21)}}>

                <FontAwesome
                name={this.scratchItemIcon(21)}
                size={50}
              color={this.scratchItemColor(21)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(22)}}>

                <FontAwesome
                name={this.scratchItemIcon(22)}
                size={50}
              color={this.scratchItemColor(22)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(23)}}>

                <FontAwesome
                name={this.scratchItemIcon(23)}
                size={50}
              color={this.scratchItemColor(23)}
              />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.item}
              onPress={()=>{this.scratchItem(24)}}>

                <FontAwesome
                name={this.scratchItemIcon(24)}
                size={50}
              color={this.scratchItemColor(24)}
              />
              </TouchableOpacity>
              
              </View>

              <Button

              onPress={()=>{this.showAllItem()}}
              full
              success
              style={styles.button}>
                <Text style={styles.buttonText}>Show All Coupons</Text>
              </Button>

              <Button
              onPress={()=>{this.resetGame()}}
              full
              primary
              style={styles.button}>
                <Text style={styles.buttonText}>Reset</Text>
              </Button>

          </View>
        


        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black",
  },
  grid:{
    

  },
  itemRow:{
    flexDirection:"row",
  },
  item:{
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    borderWidth:3,
    borderColor:"#000",
    minWidth:70,
    margin:3,
    borderColor:"white"
  },
  button:{
    marginVertical:15,
    

  },
  buttonText:{
    color:"#fff",
    fontSize:18,

  },
  topBar:{
    color:"white",
    

  },
  topText:{
    color:"white",
    alignItems:"center",
    justifyContent:"center",
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    marginVertical:10,
    paddingBottom:5
  }

});
