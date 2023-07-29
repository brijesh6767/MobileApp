import React from 'react';
import {Pressable, View, Image, Text, StyleSheet} from 'react-native';
import { IMAGES } from '../../../constants/enums/imagesEnums';
import {useNavigation} from '@react-navigation/native';
import {
  scaleHeight,
  scaleWidth,
} from '../../../constants/enums/dynamicSize';

type IBackButton = {
  onPress?: () => void;
};

const BackButton = (props: IBackButton): JSX.Element => {
  const {onPress} = props;
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => onPress ?? navigation.goBack()}>
      <View>
        <Image source={IMAGES.BACKICON} style={styles.imgLogo} />
      </View>
    </Pressable>
  );
};

export default React.memo(BackButton);

const styles = StyleSheet.create({
  imgLogo: {
    width: scaleWidth(30),
    height: scaleHeight(40),
    marginRight: scaleWidth(20),
  },
});
