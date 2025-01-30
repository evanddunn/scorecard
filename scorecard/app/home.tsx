import ScoreBug from "@/components/ScoreBug";
import { Stack } from "expo-router";
import { Component, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import axios from 'axios'
import { Box } from "@/components/ui/box";


export default function Index() {
  const [cards, setCards] = useState([<ScoreBug teamOne={'my team'} teamTwo={'not my team'} league={'prem'} timeCode={'FT'} score={'3 - 1'} />,])


  const updateCards = async () => {
    console.log('in the damn ting')
    // TODO: Connect to the API
    // let response = await axios.get('http://127.0.0.1:8000/api/football/fixtures/')t
    // console.log('response: ', response.data)
    let cards = []
    for (let x = 0; x < 20; x++) {
      cards.push(<ScoreBug key={x} teamOne={'my team'} teamTwo={'not my team'} league={'Premier League'} timeCode={'FT'} score={'3 - 1'} />)
    }
    setCards(cards);
  }

  useEffect(() => {
    updateCards();
  }, [])

  return (
    <Box className="bg-background-50 items-center" >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#FFF8F1' },
          headerTitle: 'Scorecard',
          headerTitleStyle: {
            color: '#39744D',
          }
        }}
      />
      <ScrollView>
        {cards}
      </ScrollView>
    </Box>
  );
}
