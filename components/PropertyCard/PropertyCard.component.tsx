import {
  AspectRatio,
  Box,
  Image,
  Stack,
  Text,
  Center,
  Progress,
  Button,
  View,
} from 'native-base';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { GestureResponderEvent, TouchableHighlight } from 'react-native';
import React from 'react';

type PropTypes = {
  photo:string,
  name:string,
  price:number,
  highestBid:number,
  id:string
}


export default (props:PropTypes) => {

  type Params = {
    id?:string
  }

  type Nav = {
    navigate: (value: string, {id}:Params) => void;
  };

  const {navigate} = useNavigation<Nav>();

  const navigateDetails = ()=>{
    navigate('Property', {id:props.id})
  }

  const navigateBid = ()=>{
    navigate('BidScreen', {id:props.id})
  }

  
  return (
    <Box alignItems="center" mt={'5%'}>
      <Box
        maxW="100%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <TouchableHighlight onPress={navigateDetails}>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: `https://firebasestorage.googleapis.com/v0/b/ceylongems-7f695.appspot.com/o/${props.photo}?alt=media`,
              }}
              alt="image"
            />
          </AspectRatio>
        </TouchableHighlight>
        <Stack p="4" space={3}>
          <Box flexDirection="column" >
            <Box flexDirection={'row'} justifyContent={'space-between'}>
            <Box flexDirection="row" alignItems={'center'}>
              <FontAwesomeIcon icon={faLocationDot} color={'red'} />
              <Text
                ml={'1%'}
                fontWeight={400}
                fontSize={'18px'}
                color={'background: rgba(20, 20, 43, 1);'}>
                Sri Lanka
              </Text>
            </Box>
            <Text
                ml={'1%'}
                fontWeight={300}
                fontSize={'14px'}
                color={'background: rgba(20, 20, 43, 0.72);'}>
                {props.name}
              </Text>
            </Box>
            
            <Box
              flexDirection={'row'}
              mt={'5%'}
              justifyContent={'space-between'}>
              <Box flexDirection={'column'}>
                <Text
                  fontSize={'13px'}
                  fontWeight={400}
                  color={'rgba(78, 75, 102, 1)'}>
                  Starts From
                </Text>
                <Text
                  fontSize={'20px'}
                  fontWeight={500}
                  color={'rgba(0, 0, 0, 1)'}>
                  ${props.price}
                </Text>
              </Box>
              <Box flexDirection={'column'}>
                <Text
                  fontSize={'13px'}
                  fontWeight={400}
                  color={'rgba(78, 75, 102, 1)'}>
                  Highest Bid
                </Text>
                <Text
                  fontSize={'20px'}
                  fontWeight={500}
                  color={'rgba(0, 0, 0, 1)'}>
                  {props.highestBid}$
                </Text>
              </Box>
            </Box>
            <Progress
              value={65}
              backgroundColor={'rgba(171, 171, 241, 0.3);'}
              colorScheme={'rgba(28, 26, 52, 1)'}
              mt={'2%'}
            />
            <Box
              flexDirection={'row'}
              mt={'5%'}
              justifyContent={'space-between'}>
            
              <Box flexDirection={'column'}>
                <Button
                  width={'132%'}
                  height={'40px'}
                  backgroundColor={'#FFFFFF'}
                  borderWidth={1}
                  onPress={navigateBid}
                  borderColor={'rgba(209, 213, 219, 1)'}
                  borderRadius={'6px'}>
                  <Text color={'rgba(54, 39, 222, 1);'}>Bid</Text>
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
