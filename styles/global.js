import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dedede',
        paddingHorizontal: 10
    },
    input: {
        marginTop: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#2c2a4a',
        paddingVertical: 10,
        paddingHorizontal: 5,
        width: '85%',
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        marginBottom: 20
    },
    wrapper: {
        flex: 2.5,
        flexDirection: 'column',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#fff',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10
    },
    scrollFlex: {
        width: '100%',
        flex: 1
    },
    noFlexWrapper: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#fff',
        width: '100%',
        paddingTop: 30,
        minHeight: 200,
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    aboutText: {
        fontSize: 17,
        marginVertical: 10

    },
    aboutTextTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10

    },
    quotes: {
        fontStyle: 'italic',
        fontSize: 18,
        color: '#2c2a4a',
        textAlign: 'center'
    },
    link: {
        color: '#2c2a4a',
        fontWeight: 'bold',
        fontSize: 17
    }
    ,
    sosmed: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sosmedItem: {
        textAlign: 'center',
        flex: 1,
        color: '#2c2a4a',
        paddingVertical: 5
    },
    secondWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    divider: {
        width: '100%',
        borderBottomColor: '#dedede',
        borderBottomWidth: 2,
        height: 2,
        marginVertical: 10
    },
    bottomWrapper:{
        width: '100%'
    },
    textTitle: {
        fontFamily: 'oxyb',
        fontSize: 27,
        textAlign: 'center'
    },
    screenTitle: {
        flex: 1,
        color: '#333',
        justifyContent:'center',
        alignContent: 'center',
        width: '100%',
        padding: 5
    },
    screenTitleNoFlex: {
        minHeight: 215,
        color: '#333',
        justifyContent:'center',
        alignContent: 'center',
        width: '100%',
        padding: 5
    },
    screenDescription: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'oxyl'
    },
    boxRounded: {
        backgroundColor: '#DABFFF',
        minHeight: 60,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 25,
        width: '100%',
        justifyContent: 'center',
    },
    boxTitle: {
        fontSize: 18,
        color: '#fff'
    },
    boxButton: {
        fontWeight: 'bold',
        color: '#4f518c',
        fontSize: 18,
        marginTop: 10,
        fontFamily: 'oxyb'
    },
    items: {
        width:'100%',
        flexDirection: 'row',
        minHeight: 60,
        flex: 1,
        marginVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 15
    },
    items2: {
        width:'100%',
        flexDirection: 'row',
        minHeight: 60,
        marginVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 15,
        flex: 1,
        backgroundColor: '#eee'
    },
    item: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemResult: {
        fontFamily: 'oxyl',
        fontWeight: 'normal'
    },
    saved: {
        width:'100%',
        flexDirection: 'row',
        minHeight: 60,
        marginVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#eee',
    },
    savedItem: {
        fontFamily: 'oxyb',
        fontSize: 18,
        
    },
    savedContainer: {
        flex: 6,
        minHeight: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#DABFFF'
    }
})