import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View, ScrollView, ImageBackground,Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cinzel_400Regular } from '@expo-google-fonts/Cinzel';

 
 




import fundo from './assets/fundo.png';
import logo from './assets/logo.png';
import sobre from './assets/sobre.png';








function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={fundo} resizeMode="cover" style={{ justifyContent: 'center', flex: 1, width: "100%" }}>
      <Text style={{alignItems: 'center', justifyContent: 'center', fontFamily: 'Cinzel_400regular', fontSize: 80 }}>Guerra Fria</Text>
        <Image source={logo} style={{width: '100%',height:'100%',flex: 1, alignItems: 'center', justifyContent: 'center'}}/> 
        <TouchableOpacity style={{marginTop: 20,alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,}} title='Sobre' onPress={() => navigation.navigate("Sobre")} >
     <Text>Sobre mim</Text> 
      </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20, alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,}} title='Page' onPress={() => navigation.navigate("Page")} >
      <Text>História</Text>
      
       </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

function Sobre({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <ImageBackground source={fundo} resizeMode="cover" style={{ justifyContent: 'center', flex: 1, width: "100%" }}>
      <Image source={sobre} style={{width: '100%',height:'100%',flex: 1, alignItems: 'center', justifyContent: 'center'}}/>
      <TouchableOpacity title='Voltar' onPress={() => navigation.goBack()} />
      </ImageBackground>
    </View>
  );
}

function Page({ navigation }) {
  return (
    <ImageBackground source={fundo} resizeMode="cover" style={{ justifyContent: 'center', flex: 1, width: "100%" }}>
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
      <Text>História</Text>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={{fontSize: 42,}}>A Guerra Fria foi um período tenso e complexo que marcou boa parte do século XX, moldando as relações internacionais entre as potências mundiais. Originada após a Segunda Guerra Mundial, entre aproximadamente 1947 e 1991, a Guerra Fria não foi caracterizada por confrontos militares diretos entre as duas superpotências da época, os Estados Unidos e a União Soviética, mas sim por uma intensa rivalidade ideológica, política, econômica e tecnológica.</Text>
      <Text style={{fontSize: 42,}}>No centro dessa disputa estava a divergência entre o capitalismo, liderado pelos EUA, e o comunismo, liderado pela União Soviética. Enquanto os Estados Unidos defendiam um sistema econômico baseado na livre iniciativa e na propriedade privada, a União Soviética promovia um modelo socialista, onde os meios de produção eram controlados pelo Estado. Essas diferenças ideológicas permearam todos os aspectos da vida política e social, tanto nos países envolvidos quanto em outros ao redor do mundo.</Text>
      <Text style={{fontSize: 42,}}>A Guerra Fria chegou ao fim em 1991, com o colapso da União Soviética, que deixou os Estados Unidos como a única superpotência mundial. Este evento marcou o fim de uma era e o início de uma nova ordem mundial, mas seus efeitos e legados ainda ressoam nas relações internacionais contemporâneas. A Guerra Fria, embora tenha sido uma época de incerteza e perigo, também foi um período de inovação, descoberta e desafios que moldaram profundamente o mundo em que vivemos hoje.</Text>
      <TouchableOpacity title='Voltar' onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
      
     
    </View>
    
    </ScrollView>
    </ImageBackground>
  );
}


const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded, fontError]= useFonts({
    Cinzel_400regular,
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

};
