import {
    AspectRatio,
    Box,
    Image,
    Stack,
    Text,
    Center,
    Progress,
    Button,
  } from 'native-base';
  import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';
  import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
  import { ImageBackground } from 'react-native';
import React from 'react';

  
  export default () => {
    return (
      <Box  mt={'5%'} mr={'auto'}>
        <Box
          maxW="70%"
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
              <ImageBackground
                source={{
                  uri: 'https://th.bing.com/th/id/R.4e77eba2912d796e25d5c824f5a8c415?rik=Fa3dl%2fIdhuzA5A&riu=http%3a%2f%2fwww.presentpush.com%2fwp-content%2fuploads%2f2012%2f03%2fame_gem.jpg&ehk=O3kpJOyKzLrfaLAXWBE0Vd7k1L5rxBJFSuKysWmaqr0%3d&risl=&pid=ImgRaw&r=0',
                }}
                alt="image"
              >
              </ImageBackground>
     
            </AspectRatio>
          </Box>
          <Box flexDirection={'row'} justifyContent={'space-between'} mx={'3%'} mt={'4%'}>
                <Box flexDirection={'column'}>
                    <Text fontWeight={400} fontSize={'12px'} color={'rgba(78, 75, 102, 1)'}>
                    Bidded Amout
                    </Text>
                    <Text fontWeight={500} fontSize={'13px'} color={'rgba(0, 0, 0, 1)'}>
                    $3000
                    </Text>
                </Box>
                <Box flexDirection={'column'}>
                    <Text fontWeight={400} fontSize={'12px'} color={'rgba(78, 75, 102, 1)'}>
                    Highest Bid
                    </Text>
                    <Text fontWeight={500} fontSize={'13px'} color={'rgba(0, 0, 0, 1)'}>
                    $4500
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
  