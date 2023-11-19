import {
    AspectRatio,
    Box,
    Text,
    Button,
    Image,
  } from 'native-base';
import React from 'react';

type PropTypes = {
  photo:string, 
  name:string,
  price:number, 
  highestBid:number
}
  
  export default (props:PropTypes) => {



    console.log(props)

    return (
      <Box  mt={'2%'} width={'80%'}>
        <Box
          maxW="90%"
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
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: `https://firebasestorage.googleapis.com/v0/b/ceylongems-7f695.appspot.com/o/${props.photo}?alt=media`,
              }}
              alt="image"
            />
     
            </AspectRatio>
          </Box>
          <Box flexDirection={'row'} justifyContent={'space-between'} mx={'2%'} mt={'4%'}>
                <Box flexDirection={'column'}>
                    <Text fontWeight={400} fontSize={'12px'} color={'rgba(78, 75, 102, 1)'}>
                    Bidded Amout
                    </Text>
                    <Text fontWeight={500} fontSize={'13px'} color={'rgba(0, 0, 0, 1)'}>
                    ${props.price}
                    </Text>
                </Box>
                <Box flexDirection={'column'}>
                    <Text fontWeight={400} fontSize={'12px'} color={'rgba(78, 75, 102, 1)'}>
                    Highest Bid
                    </Text>
                    <Text fontWeight={500} fontSize={'13px'} color={'rgba(0, 0, 0, 1)'}>
                    ${props.highestBid}
                    </Text>
                </Box>
              </Box>
              <Box flexDirection={'column'} justifyContent="center" alignItems="center">
                <Button backgroundColor="rgba(255, 255, 255, 1)" mt={'15%'} mb={'7%'} height={'35px'}  width={'80%'} borderRadius={6} borderWidth={1} borderColor={'rgba(35, 24, 153, 0.18)'} ><Text fontSize={'10px'}  fontWeight={500} color={'rgba(35, 24, 153, 1)'}>Re-Bid</Text></Button>
              </Box>
        </Box>
      </Box>
    );
  };
  