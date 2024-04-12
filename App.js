import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Cinzel_400Regular } from '@expo-google-fonts/cinzel';







import fundo from './assets/fundo.png';
import logo from './assets/logo.png';
import sobre from './assets/sobre.png';
import guerra from './assets/guerrafria1.png';








function HomeScreen({ navigation }) {
return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ImageBackground source={fundo} resizeMode="cover" style={{ justifyContent: 'center', flex: 1, width: '100%',  }}>
      <Image source={logo} style={{ width: '100%', height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }} />
      <TouchableOpacity style={{backgroundColor: '#000000', width: 250, height: 50, alignItems: 'center',  justifyContent: 'center', borderRadius: 20, alignSelf: 'center', marginTop: 50,}} title='Sobre' onPress={() => navigation.navigate("Sobre")} >
        <Text style={{ fontSize: 25, color: '#F0EFEC', backgroundColor: '#000000', fontFamily: 'Cinzel_400Regular', }}>Sobre mim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: '#000000', width: 250, height: 50, alignItems: 'center',  justifyContent: 'center', borderRadius: 20, alignSelf: 'center', marginTop: 50, }} title='Page' onPress={() => navigation.navigate("Page")} >
        <Text style={{  fontSize: 25, color: '#F0EFEC', fontFamily: 'Cinzel_400Regular', }}>História</Text>

      </TouchableOpacity>
    </ImageBackground>
  </View>
);
}

function Sobre({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <ImageBackground source={fundo} resizeMode="cover" style={{ justifyContent: 'center', flex: 1, width: "100%" }}>
        <Image source={sobre} style={{ width: '100%', height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }} />
        <TouchableOpacity title='Voltar' style={{backgroundColor: '#000000', width: 250, height: 50, alignItems: 'center',  justifyContent: 'center', borderRadius: 20, alignSelf: 'center', marginTop: 50,}} onPress={() => navigation.goBack()}>
        <Text style={{  fontSize: 25, color: '#F0EFEC',fontFamily: 'Cinzel_400Regular', }}>Voltar</Text>

          </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}

function Page({ navigation }) {
  return (
    <ImageBackground source={fundo} resizeMode="cover" style={{ justifyContent: 'center', flex: 1, width: "100%", }}>
      <ScrollView >
          <SafeAreaView style={{  flex: 1,paddingTop: StatusBar.currentHeight,}}>
            <ScrollView style={{ marginHorizontal: 0,}}>
              <Image source={guerra} style={{width: 350, height: 200, marginTop: 30, alignSelf: 'center'}}/>
              <Text style={{ fontSize: 20, color: '#000000', fontFamily: 'Cinzel_400Regular', }}>A Guerra Fria foi um período tenso e complexo que marcou boa parte do século XX, moldando as relações internacionais entre as potências mundiais. Originada após a Segunda Guerra Mundial, entre aproximadamente 1947 e 1991, a Guerra Fria não foi caracterizada por confrontos militares diretos entre as duas superpotências da época, os Estados Unidos e a União Soviética, mas sim por uma intensa rivalidade ideológica, política, econômica e tecnológica.</Text>
              <Text style={{  fontSize: 20, color: '#000000', fontFamily: 'Cinzel_400Regular', }}>No centro dessa disputa estava a divergência entre o capitalismo, liderado pelos EUA, e o comunismo, liderado pela União Soviética. Enquanto os Estados Unidos defendiam um sistema econômico baseado na livre iniciativa e na propriedade privada, a União Soviética promovia um modelo socialista, onde os meios de produção eram controlados pelo Estado. Essas diferenças ideológicas permearam todos os aspectos da vida política e social, tanto nos países envolvidos quanto em outros ao redor do mundo.</Text>
              <Text style={{  fontSize: 20, color: '#000000', fontFamily: 'Cinzel_400Regular', }}>A Guerra Fria chegou ao fim em 1991, com o colapso da União Soviética, que deixou os Estados Unidos como a única superpotência mundial. Este evento marcou o fim de uma era e o início de uma nova ordem mundial, mas seus efeitos e legados ainda ressoam nas relações internacionais contemporâneas. A Guerra Fria, embora tenha sido uma época de incerteza e perigo, também foi um período de inovação, descoberta e desafios que moldaram profundamente o mundo em que vivemos hoje.</Text>
              <TouchableOpacity title='Voltar' style={{backgroundColor: '#264B85', width: 250, height: 50, alignItems: 'center',  justifyContent: 'center', borderRadius: 20, alignSelf: 'center', marginTop: 50,}} onPress={() => navigation.goBack()} >
              <Text style={{  fontSize: 25, color: '#F0EFEC',fontFamily: 'Cinzel_400Regular',backgroundColor:'#000000' }}>Voltar</Text>
                </TouchableOpacity>
            </ScrollView>
          </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
}


const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Cinzel_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Page" component={Page} />
      </Stack.Navigator>
    </NavigationContainer>
);
}

