import React, { useEffect, useState } from "react";

import * as Style from "./styled";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../../components/Card";
import PokeApi from "../../services/api";
import { FlatList, StatusBar } from "react-native";


export default function Home({navigation}) {
  const [pokemonsInfos, setPokemonsInfos] = useState([]);

  //Mudar Icone para um preenchido
  const IconPokedex = (
    <MaterialCommunityIcons name="pokeball" size={42} color="black" />
  );

  const handleDetails = (item)=>{
    console.log(item.name)
    navigation.navigate('Details',{
      id: item.id
    })
  }

  useEffect(() => {
    async function pokeLoad() {
      const response = await PokeApi.get("/pokemon?offset=0&limit=100");
      const { results } = response.data;

      const getInfos = await Promise.all(
        results.map(async (item) => {
          const { id, types, name, weight } = await Infos(item.url);
        
          return { id, types, name, weight };
         

        })
   
      );
     
      setPokemonsInfos(getInfos);

     
     
      
    }

    

    pokeLoad();
    
  }, []);
  async function Infos(url) {
    const response = await PokeApi.get(url);
    const { id, types, name, weight } = response.data;

    return {
      id,
      types,
      name,
      weight,
    };
  }
  return (
    <Style.Container>
      <StatusBar/>
      <Style.Header>
        {IconPokedex}
        <Style.LogoName>Pokédex</Style.LogoName>
      </Style.Header>
      
      <FlatList
      data={pokemonsInfos}
     
      numColumns={2}
   
      
      renderItem={({item: pokemonsInfos})=> 
  
        <Card 
      
        data={pokemonsInfos} detail={handleDetails} />
      }
      />
    
    </Style.Container>
  );
}
