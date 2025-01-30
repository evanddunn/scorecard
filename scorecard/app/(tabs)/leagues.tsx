import ScoreBug from "@/components/ScoreBug";
import { Stack } from "expo-router";
import { Component, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import axios from 'axios'
import { Box } from "@/components/ui/box";


export default function Index() {
  return ( 
    <Box className="bg-background-50 items-center" >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#FFF8F1' },
          headerTitle: 'Leagues',
        }}
      />
      <ScrollView>
        <Text>Leagues</Text>
      </ScrollView>
    </Box>
  );
}
