import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { COLORS } from '../../../constants/colors/Colors';
import { scaleHeight, scaleWidth } from '../../../constants/enums/dynamicSize';
import {IMAGES} from '../../../constants/enums/imagesEnums';


const Dashboard = () => {
  return (

    <View style={styles.container}>
        <View style={styles.headerView}>
        <Image source={IMAGES.LOGO} style={styles.imgLogo} />
         </View>
      <View style={styles.row}>
        <View style={[styles.column, styles.firstColumn]}>
          <Text style={styles.text}>My Profile</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>My Job</Text>
        </View>
        <View style={[styles.column, styles.lastColumn]}>
          <Text style={styles.text}>Coming soon</Text>
        </View>
       
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  row: {
    flexDirection: 'row',
    marginTop:scaleHeight(15),
    marginHorizontal:scaleWidth(20)
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 20,
    elevation: 3,
  },
  firstColumn: {
    marginLeft: 0,
  },
  lastColumn: {
    marginRight: 0,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerView: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: COLORS.BLUE,
    justifyContent:'flex-end',
    alignItems: 'center',
    
  },
  imgLogo:{
    width:scaleWidth(120),
    height:scaleHeight(41),
    marginRight:scaleWidth(20)
},
});

export default Dashboard;