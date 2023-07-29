import {View, Text, Image, Pressable, Alert} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {IMAGES} from '../../../constants/enums/imagesEnums';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAME} from '../../../constants/enums/routeNamesEnums';

const Card = ({item}: {item: any}) => {
  const navigation = useNavigation();
  const sampleTypeNames = item.TestDetail;
  const testRate = item.TestDetail;
  const sumOfRates = testRate.reduce(
    (total: any, rat: any) => total + rat.Rate,
    0,
  );
  console.log('yashshdh@@@', sampleTypeNames);

  return (
    <View style={styles.mainContainer}>
      <Pressable
        onPress={() =>
          navigation.navigate(ROUTE_NAME.CARD_DETAILS, {DATA: item})
        }>
        <View style={styles.cardStyl}>
          <View style={styles.txtView}>
            <Text style={styles.txtt}>
              {item?.Title} {item?.PName}
            </Text>
            <Text style={styles.txtt2}>11:15 AM</Text>
          </View>

          <View style={styles.imageView}>
            <Image source={IMAGES.Location} style={styles.IMg} />
            <View style={{flexDirection: 'row'}}>
              <Text numberOfLines={1} style={styles.pinCode}>
                {item?.Locality}-{item?.Pincode}
              </Text>
              <Text style={styles.status}>{item?.Status}</Text>
            </View>
          </View>
          <View style={styles.cashView}>
            <Image source={IMAGES.BAG} style={styles.IMg} />
            {sampleTypeNames.map((ele: any) => (
              <Text style={{color: 'red'}}> {ele.SampleTypeName} ,</Text>
            ))}
          </View>
          <View style={styles.cashView}>
            <Image source={IMAGES.MONEY} style={styles.IMg} />
            <Text style={styles.styleYxtcash}>
              {' '}
              {item.Paymentmode} (Total: {sumOfRates})
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Card;
