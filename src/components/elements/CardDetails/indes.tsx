import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackButton from '../BackButton';
import {IMAGES} from '../../../constants/enums/imagesEnums';
import {ConstantText} from '../../../constants/enums/constantTexts';
import {DefaultTransition} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import {normalizeFont, scaleHeight} from '../../../constants/enums/dynamicSize';
import NormalButton from '../NormalButton';
import {COLORS} from '../../../constants/colors/Colors';

const CardDetails: React.FC = ({route}: any) => {
  const DATA = route.params;

  const [detail, setdetails] = React.useState(DATA);
  console.log('*******', detail);
  const Patient_Detail = detail?.DATA;

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerView}>
        <BackButton />
        <Text style={styles.txtstyl}>{ConstantText.APPOINTMENT}</Text>
        <Image source={IMAGES.CALL} style={styles.Call} />
        <Image source={IMAGES.CHAT} style={styles.Call} />
        <Image source={IMAGES.THREE_DOT} style={styles.Call} />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.txtTimeSlot}>
          Time Slot:{Patient_Detail?.appdatetime}
        </Text>
        <View style={styles.mainView}>
          <View style={styles.innerView}>
            <Text style={styles.headerText}>Collection Details</Text>
          </View>
          <View>
            <Text style={styles.firstText}>
              Name:
              <Text style={styles.detailsText}> {Patient_Detail.PName}</Text>
            </Text>
            <Text style={styles.firstText}>
              Age:
              <Text style={styles.detailsText}> {Patient_Detail.Age}</Text>
            </Text>
            <Text style={styles.firstText}>
              Gender:
              <Text style={styles.detailsText}> {Patient_Detail.Gender}</Text>
            </Text>
            <Text style={styles.firstText}>
              Mobile No.
              <Text style={styles.detailsText}> {Patient_Detail.Mobile}</Text>
            </Text>
            <Text style={styles.firstText}>
              ALT Mobile No.
              <Text style={styles.detailsText}>
                {Patient_Detail.Alternatemobileno}
              </Text>
            </Text>
            <Text style={styles.firstText}>
              Address:
              <Text style={styles.detailsText}> {Patient_Detail.Locality}</Text>
            </Text>
            <Text style={styles.firstText}>
              LandMark:
              <Text style={styles.detailsText}> {Patient_Detail.landmark}</Text>
            </Text>
            <Text style={styles.firstText}>
              Pincode:
              <Text style={styles.detailsText}> {Patient_Detail.Pincode}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={styles.innerView}>
            <Text style={styles.headerText}>Investigation Details</Text>
          </View>

          <View>
          {/* {patient_Detail.map((ele: any) => (
              <Text style={{color: 'red'}}> {ele.TestDetail} ,</Text>
            ))} */}
            <Text style={styles.firstText}>Discount:</Text>
            <Text style={styles.firstText}>Amount to be Paid</Text>
            <Text style={styles.firstText}>Payment Mode</Text>
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={styles.innerView}>
            <Text style={styles.headerText}>Drop Location Details</Text>
          </View>
          <View>
            <Text style={{color: 'red'}}>
              Drop Location:
              <Text style={styles.detailsText}> {Patient_Detail.centre}</Text>
            </Text>
            <Text style={styles.firstText}>
              Client:
              <Text style={styles.detailsText}> {Patient_Detail.Client}</Text>
            </Text>
            <Text style={styles.firstText}>
              Remark:
              <Text style={styles.detailsText}> {Patient_Detail.Remarks}</Text>
            </Text>
          </View>
        </View>

        <NormalButton
          CustomButtonStyle={styles.button}
          title={'CHECK-IN'}
          onPress={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </View>
    </View>
  );
};

export default CardDetails;
