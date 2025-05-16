import { useEffect, useState } from 'react'
import { apiRick } from '@/api/api'
import { Card } from '../../components/card'
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native'
import { Item } from '@/components/item'

export default function Req() {
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [erro, setErro] = useState(false)

  useEffect(() => {
    apiRick.get(`/character/?page=${page}`)
      .then((response) => {
        setData(response.data.results);
        setErro(false);
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          setErro(true);
        }
        console.log(error);
      });
  }, [page]);

  console.log(data)
  return (
    <>
      <View style={styles.wrapPage}>
        <Text style={styles.titleName}>Rick and Morty API</Text>
        {erro && <Text style={{ color: 'red' }}>Página não encontrada</Text>}
        <TextInput 
          onChangeText={setPage} 
          value={page} 
          placeholder="Digite a Página 1 / 42" 
          keyboardType="number-pad"
        />

        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={({ item }) => (
            <Item image={item.image} name={item.name} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  wrapPage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1, 
  },
  flatList: {
    flex: 1,  
    width: 200,
  },
  titleName: {
    textAlign: 'center',
  },
});
