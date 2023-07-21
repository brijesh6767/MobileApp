import {StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AppLoader from '../../elements/AppLoader';
import { COLORS } from '../../../constants/colors/Colors';
import {
  Camera,
  useCameraDevices,
  CameraDevice,
} from 'react-native-vision-camera';
import {windowWidth, windowHeight, normalizeFont} from '../../../constants/enums/dynamicSize';
import {ITakePicture} from '../../../interface/TakePicture';
import { scaleHeight,scaleWidth } from '../../../constants/enums/dynamicSize';
import NormalButton from '../../elements/NormalButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTE_NAME } from '../../../constants/enums/routeNamesEnums';
import RNFS from 'react-native-fs';



const PhelboPicture: React.FC<ITakePicture> = ({lableTXT}) => {
  const [device, setDevice] = useState<CameraDevice | null>(null);
  const devices = useCameraDevices();
  const navigation =useNavigation();
  const camera = useRef<Camera | null>(null);
  const frontDevice = devices.front;
  const [isActive, setIsActive] = useState(false);
  const [imgData, setImgData] = useState<String | undefined>('');
  
  useEffect(() => {
    if (frontDevice) {
      setDevice(frontDevice);
    }
  }, [frontDevice]);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const cameraPermission = await Camera.requestCameraPermission();
  };

  const handleToggleCamera = () => {
    setIsActive(prevIsActive => !prevIsActive);
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  const takePicture = async () => {
    const photo = await camera.current?.takePhoto();
    console.log(photo);
    setImgData(photo?.path);
    setIsActive(false);
  };
 

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.txtstyl}>Max Phelbo UAT</Text>
        {/* <Text style={styles.txtstyl1}>Save</Text> */}
      </View>

      <View style={styles.PhotoView}>
        {imgData !== '' && (
          <Image source={{uri: 'file://' + imgData}} style={styles.photo} />
        )}
       
      </View>
      <TouchableOpacity style={styles.button} onPress={handleToggleCamera}>
        <Text style={styles.buttonText}>Click Here to Take Selfi</Text>
      </TouchableOpacity>

      {isActive && (
        <Camera
          ref={ref => (camera.current = ref)}
          style={[
            StyleSheet.absoluteFill,
            {width: windowWidth, height: windowHeight},
          ]}
          device={device}
          isActive={isActive}
          photo
        />
      )}
      {isActive && (
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: 'red',
            position: 'absolute',
            bottom: 50,
            //top:550,
            alignSelf: 'center',
          }}
          onPress={takePicture}></TouchableOpacity>
      )}
     {isActive ? null : <NormalButton 
      title='Next'
     CustomButtonStyle={styles.Btnstyl}
     onPress={()=> {imgData === '' ? Alert.alert('Mandatory!!','Please click Photo to Procced further') :navigation.navigate(ROUTE_NAME.BIKE_PIC ,{PhelboImg :imgData})}}
      />}
    </View>
  );
};

export default PhelboPicture;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: 270,
    height: 40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent:'center'
    // marginTop: 180,
  },
  headerView: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: COLORS.BLUE,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:normalizeFont(15),
    color:COLORS.BLACK,
  },
  container: {
   alignItems: 'center',
   //justifyContent:'center',
    flex: 1,
    
  },
  PhotoView: {
    backgroundColor: 'gray',
    height: 190,
    width: 270,
    marginTop: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // position: 'absolute', //
    // top: 0,
    // justifyContent:'center',
    // alignItems:'center'
  },
  photo: {
    flex: 1,
    borderRadius: 10,
  },
  txtstyl: {
    marginLeft: scaleWidth(18),
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  txtstyl1: {
    marginRight: scaleWidth(18),
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  Btnstyl:{
    marginTop:150,
    width:100
  }
});



