import { Image, StyleSheet, Text, View } from "react-native"

const lfc = require('@/assets/images/LFC.png')
const mcfc = require('@/assets/images/MCFC.png')

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
    width: 350
  },
  image: {
    width: 50,
    height: 50
  },
  subContainer: {
    flex: 1,
    alignItems: "center"
  }
})

export default function ScoreBug({ teamOne, teamTwo, league, timeCode, score }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image style={styles.image} source={lfc} resizeMode="contain" />
        <Text>{teamOne}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text>{league}</Text>
        <Text style={{ fontSize: 32 }}>{score}</Text>
        <Text>{timeCode}</Text>
      </View>
      <View style={styles.subContainer}>
        <Image style={styles.image} source={mcfc} resizeMode="contain" />
        <Text>{teamTwo}</Text>
      </View>
    </View>
  )
}

