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

function App() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

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
          <AspectRatio w="100%" ratio={16 / 9} flex={1}>
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/R.4e77eba2912d796e25d5c824f5a8c415?rik=Fa3dl%2fIdhuzA5A&riu=http%3a%2f%2fwww.presentpush.com%2fwp-content%2fuploads%2f2012%2f03%2fame_gem.jpg&ehk=O3kpJOyKzLrfaLAXWBE0Vd7k1L5rxBJFSuKysWmaqr0%3d&risl=&pid=ImgRaw&r=0',
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
              Golden Ruby
            </Text>
            <Text
              ml={'1%'}
              fontWeight={300}
              fontSize={'14px'}
              color={'background: rgba(20, 20, 43, 0.72);'}>
              500$
            </Text>
          </Box>
        </Box>
        <Divider my="2%" />
        {!isKeyboardOpen && (
          <Box flex={3}>
            <Text ml={'5%'} fontSize={'18px'} color={'gray.700'}>
              Seller Details
            </Text>
            <Box flexDirection={'row'} alignItems={'flex-start'} m={'5%'}>
              <Box width={'30%'}>
                <Text m="5%" fontSize={16}>
                  Name
                </Text>
                <Text m="5%" fontSize={16}>
                  Country
                </Text>
                <Text m="5%" fontSize={16}>
                  Raiting
                </Text>
              </Box>
              <Box width={'50%'}>
                <Text m="5%" fontSize={16}>
                  Kasun Kalhara
                </Text>
                <Text m="5%" fontSize={16}>
                  Sri Lanka
                </Text>
                <Badge colorScheme={'success'} m="5%" fontSize={16}>
                  4.5
                </Badge>
              </Box>
            </Box>
          </Box>
        )}

        <Divider my="2%" />
        <Box flex={2} width={'100%'}>
          <Input type="text" />
          <Button mt={'2%'}>
            <Text>Bid</Text>
          </Button>
        </Box>
      </Box>
    </DefaultLayout>
  );
}

export default App;
