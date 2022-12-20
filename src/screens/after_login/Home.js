import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import colors from '../../constants/colors'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
// import UiButton from '../../components/UI/UiButton'
import Card from '../../components/UI/Card'
import Clickable from '../../components/HOC/Clickable'
const Home = ({ navigation }) => {

    const [data, setData] = useState();
    const [userData, setUserData] = useState();

    const getData = async () => {
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/1',{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            // headers: {
            //   'Content-Type': 'application/json'
            //   // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
          })
        let JsonData = await data.json();
        setData(JsonData)
    }

    const getUsersData = async () => {
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        let JsonData = await data.json();
        setUserData(JsonData)
    }
    useEffect(() => {
        getUsersData()
    }, [])
    return (
        <SafeAreaView>
            <Paragraph>Home</Paragraph>
            <Clickable>
                <Paragraph size={50} onPress={getData()}>getData</Paragraph>
            </Clickable>

            <Paragraph size={50} onPress={() => navigation.navigate('Login')}>getData</Paragraph>


            <FlatList data={userData}
                renderItem={({ item, index }) => {
                    return (
                        <Card>
                            <Paragraph size={20} type='bold'>{item?.name}</Paragraph>
                            <Paragraph size={20} type='bold'>{item?.username}</Paragraph>
                            <Paragraph size={14} type='light'>{item?.email}</Paragraph>
                        </Card>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})