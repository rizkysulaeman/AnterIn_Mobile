import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity ,  ScrollView,  SafeAreaView, } from 'react-native'
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { baseUrl } from '../../baseUrl';

export default function DetailPemesanan() {
  navigataion = useNavigation()
  const handlePress = ()=>{
    navigataion.navigate('DetailPemansanByUser')
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
      
        <View style={{ marginBottom: 40 }}>
          <View style={styles.header}>
            <Text style={styles.text}>Semua</Text>
            <Text style={styles.text}>Sedang Dikirim</Text>
            <Text style={styles.text}>Sudah Dikirim</Text>
            <Text style={styles.text}>Selesai</Text>
          </View>
          <ScrollView style={styles.scrollView}>
          <View>
            <View style={styles.search}>
              <Text style={{ color: 'black' }}>Cari nama produk yang dipesan</Text>
            </View>
            
   
       
 
                  <View style={styles.proses}>
                    <Text style={styles.textproses}>Produk yang Sedang Dipesan</Text>
                    <View style={styles.jenispaket}>
                      <Image source={require('../../../img/ikon-riwayatpesanan/limited.png')} style={styles.img} />
                      <Text style={styles.paketcepat}>Paket Ekonomis</Text>
                    </View>
                    <View style={styles.produkproses}>
                      <TouchableOpacity
                        style={styles.textdetailcontainer}
                        // onPress={() => navigateToDetail(item.id)}
                        onPress={handlePress}
                      >
                        <Text style={styles.textdetail}>
                          Cek detail disini
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.mobilcontainer}>
                      <Image source={require('../../../img/ikon-riwayatpesanan/cepat.png')} style={styles.mobil} />
                      <Text style={styles.infopaket}>
                        Paket Sedang Diproses
                      </Text>
                    </View>
                  </View>

              
            </View>
  
        
   
          </ScrollView>
        </View>


   
   
      </SafeAreaView>
      <View style={{  backgroundColor: '#0B111F', padding: 20 }} >
   
   </View>
    </>
  )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  paketcepat:{
    textAlign:'center',color:'white' ,marginTop:20 , fontWeight:'bold'
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 1,
  },
  img:{
    height:40, width: 300, alignSelf: 'center',marginTop: -20
  },
  mobil: {
    width: 180,
    height: 180,

  },
  infopaket: {
    color: 'white',

    marginTop:-60
  },
  textdetailcontainer: {
    padding: 10,
    alignSelf: 'flex-end',
    marginTop: 40,
  },
  mobilcontainer: {
    // padding: 10,
    marginTop: -135,
    marginRight: 330,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
  },
    produkproses:{
        // flexDirection:'row',
        // justifyContent:'space-between'
        
    },
    jenispaket:{
        backgroundColor:'#000000',
        padding:20,
        width:230,
        paddingBottom:50,
        marginTop:20,
        marginLeft:40,
        borderRadius:30


    },

    proses:{
        marginTop:20,
        backgroundColor:'#0B111F',
        padding:10,
        paddingBottom:30,
        borderColor:'black', // Added border color
        borderWidth:1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        fontWeight:'bold',
        borderRadius:10
    
    },
    textproses:{
        color:'white',
        fontWeight:'bold',
        // marginRight :10,
        marginLeft:20,
        marginTop:20,
        // marginRight:40,
        flexDirection: 'row'
        
    },
    textdetail:{
        color:'white',
        fontWeight:'bold',
        // marginRight :10,
        // marginLeft:20,
        // marginTop:20,
        // marginRight:40,
        backgroundColor:'#EDA01F',
        padding:10,
        borderRadius:10,
        textAlign:'center',
        // width:200,
        // height:200,

    },
    
    
    search:{
        backgroundColor:'white',
        marginTop:20,
        padding:10,
        borderRadius:8
    },

    container:{
        flex:1,
        backgroundColor:'#EDA01F',
        padding:10

    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',

        // width: width * 0.4, 
        // height: width * 0.4, 

        justifyContent:'space-between',
        // marginTop:'20',
        

        
    }   ,


    text:{
    //   borderRadius:1099999,
       backgroundColor:'white',
       padding:10,
       borderRadius:2,
       color:'black',
    //    paddingLeft:10,
    //    paddingRight:10
    width:120,
    textAlign:'center',
    borderColor:'black', // Added border color
    borderWidth:1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontWeight:'bold'


    }

})