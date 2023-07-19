import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AppLoader from '../../elements/AppLoader';
import {COLORS} from '../../../constants/colors/Colors';
import {
  Camera,
  useCameraDevices,
  CameraDevice,
} from 'react-native-vision-camera';
import {windowWidth, windowHeight} from '../../../constants/enums/dynamicSize';
import {ITakePicture} from '../../../interface/TakePicture';
import {scaleHeight, scaleWidth} from '../../../constants/enums/dynamicSize';
import NormalButton from '../../elements/NormalButton';
import {useNavigation} from '@react-navigation/native';
import {getDataFomLocalStore} from '../../../utils/helperFunction';
import {useLoginUpdateMutation} from '../../../domain/redux/RTKQuery/loginUpdate';
import {ILoginUpdate} from '../../../interface/LoginInterface';
import { ROUTE_NAME } from '../../../constants/enums/routeNamesEnums';

const BagPhoto: React.FC<ITakePicture> = ({route}: any) => {
  const {imgPath, bikePic} = route.params;
  const [device, setDevice] = useState<CameraDevice | null>(null);
  const devices = useCameraDevices();
  const navigation = useNavigation();
  const camera = useRef<Camera | null>(null);
  const frontDevice = devices.back;
  const [isActive, setIsActive] = useState(false);
  const [imgData, setImgData] = useState<String | undefined>('');
  const [userData, setUserData] = useState<any | null>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string>('');

  const [logiUpdateApi, logiUpdateApiResult] = useLoginUpdateMutation();
  console.log('responce@@@@@@@', logiUpdateApiResult);


  useEffect(() => {
    if (logiUpdateApiResult.isLoading) {
      setIsLoading(true);
      setError('');
    } else if (logiUpdateApiResult.isSuccess) {
      setIsLoading(false);
      // SetOtpp(sendOtpResult?.data?.otp)
      navigation.navigate(ROUTE_NAME.DASHBOARD);
    } else if (logiUpdateApiResult.isError) {
      setIsLoading(false);
      setError(error);
    }
  }, [
    logiUpdateApiResult.isLoading,
    logiUpdateApiResult.isSuccess,
    logiUpdateApiResult.isError,
    logiUpdateApiResult.error,
  ]);

  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      const data = await getDataFomLocalStore('data');
      const parsedData = JSON.parse(data ?? '');
      setUserData(parsedData);
      console.log('User Data:', parsedData);
    } catch (error) {
      console.log('Error while fetching user data:', error);
    }
  };

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

  const saveHandler = async () => {
    imgData === ''
      ? Alert.alert('Mandatory!!', 'Please click Photo to Procced further')
      : null;
    try {
      const formData = new FormData();
      formData.append('PhelbotomistID', userData?.[0]?.PhlebotomistID);
      formData.append('Selfie', imgPath);
      formData.append('Bag', imgData);
      formData.append('Bike', bikePic);
      await logiUpdateApi(formData);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  

  return (

    <View style={styles.container}>
           { isLoading && <AppLoader/>}

      <View style={styles.headerView}>
        <Text style={styles.txtstyl}>Max Phelbo UAT</Text>
      </View>

      <View style={styles.PhotoView}>
        {imgData !== '' && (
          <Image source={{uri: 'file://' + imgData}} style={styles.photo} />
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleToggleCamera}>
        <Text style={styles.buttonText}>Click Here to Upload Bag Picture</Text>
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
            alignSelf: 'center',
          }}
          onPress={takePicture}></TouchableOpacity>
      )}
      {isActive ? null : (
        <NormalButton
          title="Save"
          CustomButtonStyle={styles.Btnstyl}
          onPress={saveHandler}
        />
      )}
    </View>
  );
};

export default React.memo(BagPhoto);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: 270,
    height: 40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
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
    fontSize: 15,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  PhotoView: {
    backgroundColor: 'gray',
    height: 190,
    width: 270,
    marginTop: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
  Btnstyl: {
    marginTop: 150,
    width: 100,
  },
});
