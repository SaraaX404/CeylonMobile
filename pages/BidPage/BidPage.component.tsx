/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Box,
  Text,
  Image,
  Input,
  Button,
  AspectRatio,
  Divider,
  Badge,
} from 'native-base';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';
import {DefaultLayout} from '../../layouts';
import {Keyboard} from 'react-native';
import { GetAllPostsResponse } from '../../models/ProductModels';
import { useMutation, useQuery } from 'react-query';
import { GetPostsById } from '../../services/ProductsService';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { CreateBidRequest } from '../../models/BidsModel';
import { CreateBid } from '../../services/BidsService';

type RouterParams = {
  BidScreen: {
    id: string;
  };
};

type AppProps = {
  route: RouteProp<RouterParams, 'BidScreen'>;
};


function App(props:AppProps) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [price,setPrice] = useState<any>(0)

  type Nav = {
    navigate: (value: string) => void;
  };

  const {navigate} = useNavigation<Nav>();

  const {params:{id}} = props.route

  const {data} = useQuery<GetAllPostsResponse>('details',()=> GetPostsById(id))

  const bidMutation = useMutation<boolean, Error, CreateBidRequest, unknown>(CreateBid);
  
  let bidData:CreateBidRequest= {
    postID:id,
    price:price
  }

  const makeBid = async()=>{
    let res = await bidMutation.mutateAsync(bidData)
    if(res){
      navigate('Marketplace')
    }
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      },
    );

    // Clean up listeners when the component is unmounted
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  console.log(data)
  console.log(`https://firebasestorage.googleapis.com/v0/b/ceylongems-7f695.appspot.com/o/${data?.photos[0].photo}?alt=media`)

  return (
    <DefaultLayout>
      <Box
        flex={1}
        flexDirection={'column'}
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        margin={'5%'}>
        <Box
          flex={2}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-evenly'}>
          <AspectRatio w="100%" ratio={16 / 9} flex={1} borderRadius={'lg'}>
          <Image
            borderRadius={20}
            source={{
              uri: `https://firebasestorage.googleapis.com/v0/b/ceylongems-7f695.appspot.com/o/${data?.photos[0].photo}?alt=media`,
            }}
            alt="image"
          />
          </AspectRatio>

          <Box
            flex={1}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            ml={'5%'}>
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
              {data?.name}
            </Text>
            <Text
              ml={'1%'}
              fontWeight={300}
              fontSize={'14px'}
              color={'background: rgba(20, 20, 43, 0.72);'}>
              {data?.start_price}$
            </Text>
          </Box>
        </Box>
        <Divider my="2%" />
        {!isKeyboardOpen && (
           <Box
           flex={3}
           width={'100%'}
           p={4}
           borderRadius={8}
           borderWidth={1}
           borderColor="gray.200"
           backgroundColor="white"
           shadow={3}
         >
           <Text fontSize="xl" fontWeight="bold" mb={4} color="gray.700">
             Seller Details
           </Text>
           <Box flexDirection="row" alignItems="center">
             <Box flex={1}>
               <Text fontSize={16} mb={2}>
                 Name
               </Text>
               <Text fontSize={16} mb={2}>
                 Country
               </Text>
               <Text fontSize={16} mb={2}>
                 Rating
               </Text>
             </Box>
             <Box flex={2}>
               <Text fontSize={16} mb={2}>
                 {data?.seller_id.first_name}
               </Text>
               <Text fontSize={16} mb={2}>
                 {data?.seller_id.country}
               </Text>
               <Badge
                 colorScheme="success"
                 variant="subtle"
                 fontSize={16}
                 borderRadius={4}
                 p={2}
               >
                 4.5
               </Badge>
             </Box>
           </Box>
         </Box>
        )}

        <Divider my="2%" />
        <Box flex={2} width={'100%'}>
          <Input type="text" onChangeText={(e) => setPrice(e)}  />
          <Button mt={'2%'} onPress={makeBid}>
            <Text>Bid</Text>
          </Button>
        </Box>
      </Box>
    </DefaultLayout>
  );
}

export default App;
