import {Box, Text, ScrollView} from 'native-base';
import {DefaultLayout} from '../../layouts';

const App = () => {
  return (
    <DefaultLayout>
      <ScrollView>
        <Box style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          <Box
            style={{flex: 1}}
            alignItems={'center'}
            backgroundColor="#f5f5fa">
            <Text fontSize="20px" m={'8%'} fontWeight={500} color={'#000000'}>
              Policies
            </Text>
          </Box>
          <Box
            flex={4}
            backgroundColor="#FFFFFF"
            height={'100%'}
            alignItems={'center'}>
            <Box mx={'5%'}>
              <Text
                textAlign={'justify'}
                color={'#4E4B66'}
                fontSize={'16px'}
                mt={'5%'}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </Text>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </DefaultLayout>
  );
};

export default App;
