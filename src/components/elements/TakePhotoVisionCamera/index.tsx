import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AppLoader from '../../elements/AppLoader';
import {
  Camera,
  useCameraDevices,
  CameraDevice,
} from 'react-native-vision-camera';
import {windowWidth, windowHeight} from '../../../constants/enums/dynamicSize';
import {ITakePicture} from '../../../interface/TakePicture';

const TakePhotoVisionCamera: React.FC<ITakePicture> = ({lableTXT}) => {
  const [device, setDevice] = useState<CameraDevice | null>(null);
  const devices = useCameraDevices();
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
      <View style={styles.PhotoView}>
        {imgData !== '' && (
          <Image source={{uri: 'file://' + imgData}} style={styles.photo} />
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleToggleCamera}>
        <Text style={styles.buttonText}>Take Selfi</Text>
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
            //bottom: 150,
            //top:550,
            alignSelf: 'center',
          }}
          onPress={takePicture}></TouchableOpacity>
      )}
    </View>
  );
};

export default TakePhotoVisionCamera;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: 260,
    height: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 180,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  container: {
    alignItems: 'center',
    // flex: 1,
  },
  PhotoView: {
    backgroundColor: 'gray',
    height: 170,
    width: 260,
    marginTop: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute', //
    top: 0,
  },
  photo: {
    flex: 1,
    borderRadius: 10,
  },
});



