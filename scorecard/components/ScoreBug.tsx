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
type ScoreBugProps = {
  teamOne: string,
  teamTwo: string,
  league: string,
  timeCode: string | null,
  score: string | null,
  date: string,
  venue: string,
  referees: string[],
  attendance: number,
  status: string
}

export default function ScoreBug({ teamOne, teamTwo, league, timeCode, score, date, venue, referees, attendance, status }: ScoreBugProps) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image style={styles.image} source={lfc} resizeMode="contain" />
        <Text>{teamOne}</Text>
      </View>
      {
        status === "live" && (
          <View style={styles.subContainer}>
            <Text>{league}</Text>
            <Text style={{ fontSize: 32 }}>{score}</Text>
            <Text>{timeCode}</Text>
          </View>
        )
      }
      {
        status === "final" && (
          <View style={styles.subContainer}>
            <Text>{league}</Text>
            <Text style={{ fontSize: 32 }}>{score}</Text>
            <Text>{timeCode}</Text>
          </View>
        )
      }
      {
        status === "upcoming" && (
          <View style={styles.subContainer}>
            <Text>{league}</Text>
            <Text>{date}</Text>
          </View>
        )
      }
      <View style={styles.subContainer}>
        <Image style={styles.image} source={mcfc} resizeMode="contain" />
        <Text>{teamTwo}</Text>
      </View>
    </View>
  )
}

