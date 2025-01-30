import { LinearGradient } from "expo-linear-gradient";
import { Link, router, Stack } from "expo-router";
import { Image, Text, View, Pressable } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";

const logo = require('@/assets/images/logo.png')

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <LinearGradient colors={['#39744D', '#A4EEBD']} style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      }}>
        <View style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}>
          <Image source={logo}></Image>
          <View>
            <Text style={{ padding: 32, textAlign: 'center', fontSize: 20 }}>Scorecard is a simple sports app designed to show live scores and stats with the ability to turn ads and betting options off. </Text>
            <Link replace href="/(tabs)" asChild>
              {/* <Button color={'#7D49F8'} title="Keep Score" /> */}
              <Button size="md" variant="solid" action="secondary" >
                <ButtonText>Hello World!</ButtonText>
              </Button>
            </Link>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
