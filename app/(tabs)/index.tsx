import { useEffect, useState } from 'react'
import { apiRick } from '@/api/api'
import { Card } from '../../components/card'
import { View, Text, TextInput, StyleSheet } from 'react-native'



export default function Req(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [erro, setErro] = useState(false)

    useEffect(() => {
    apiRick.get(`/character/?page=${page}`)
        .then((response) => {
            setData(response.data.results);
            setErro(false); // Limpa erro se a requisição funcionar
        })
        .catch((error) => {
            if (error.response?.status === 404) {
                setErro(true);
            }
            console.log(error);
        });
    }, [page]);

    console.log(data)
    return(
        <>
            <View style={styles.wrapPage}>
                <Text style={styles.titleName}>Rick and Morty API</Text>
                {erro && <Text style={{ color: 'red' }}>Página não encontrada</Text>}
                <TextInput onChangeText={setPage} value={page} placeholder="Digite a Página 1 / 42" keyboardType="number-pad"></TextInput>

                <View>
                    {data.map((item, index) => (
                    <Card key={index} name={item.name} image={item.image} />
                    ))}

                </View>
            </View>

        </>
    )

}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  title: {
    textAlign: 'center',
  },
  wrapPage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
    titleName: {
      textAlign: 'center',

  },
    
});
