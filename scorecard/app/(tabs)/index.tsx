import ScoreBug from "@/components/ScoreBug";
import { Stack } from "expo-router";
import { Component, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import axios from 'axios'
import { Box } from "@/components/ui/box";
import { scoresExample } from "@/components/scores_example";


export default function Index() {
  const [cards, setCards] = useState(null)


  const updateCards = async () => {
    console.log('in the damn ting')
    // TODO: Connect to the API
    // let response = await axios.get('http://127.0.0.1:8000/api/football/fixtures/')t
    // console.log('response: ', response.data)
    let cards = []
    for (let score of scoresExample) {
      cards.push(<ScoreBug
        key={cards.length}
        teamOne={score.home.name} 
        teamTwo={score.away.name} 
        league={score.league} 
        timeCode={score.time} 
        score={score.score} 
        date={score.date} 
        venue={score.venue} 
        referees={score.referees} 
        attendance={score.attendance} status={score.status} />)
    }
    setCards(cards);
  }

  useEffect(() => {
    updateCards();
  }, [])

  return (
    <Box className="bg-background-50 items-center h-full" >
      <Stack.Screen
        options={{
          headerTitle: 'Scorecard',
        }}
      />
      <ScrollView>
        {cards}
      </ScrollView>
    </Box>
  );
}
