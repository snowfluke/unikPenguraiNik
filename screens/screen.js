import React, { useState, useEffect } from 'react';
import { Text, Linking, Image, ToastAndroid, FlatList, View, ScrollView, StatusBar, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import CustomButton from "../components/button";
import { globalStyles } from "../styles/global";
import { nikParse } from '../module/nik-parse-min';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = ({ children }) => (
    <View style={globalStyles.container}>{children}</View>
);

export const Home = ({ navigation }) => {
    const [nik, setNik] = useState('')
    const [history, setHistory] = useState('Belum ada')

    const inputNik = () => {
        if( nik.length != 16 ) {
            alert('Panjang NIK harus mencapai 16 digit!');
            return
        }

        let status, uNik;
        nikParse(nik, (res) => {
            if(res.status !== 'success'){
                status = false
            }else{ 
                status = true
                uNik = res.data
            }
        })

        if(status){
            setHistory(nik)
            setNik('')
            navigation.navigate("Hasil", {uNik: uNik})
        }else{
            alert('NIK tidak valid!')
            return
        }
    }

    return(
        <Container>
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                <View style = {{flex:1}}>
                    <StatusBar barStyle="light-content" backgroundColor="#2c2a4a" />
                    <View style = {globalStyles.screenTitle}>
                        <Text style = {globalStyles.textTitle}>Masukkan NIK KTP</Text>
                        <Text style = {globalStyles.screenDescription}>Periksa informasi apa saja yang terdapat di dalam NIK-mu!</Text>
                    </View>
                    <View style = {globalStyles.wrapper}>
                    <View style = {globalStyles.secondWrapper}>
                    <MaterialIcons 
                            name = "person-search"
                            size = {50}
                            style = {{color: '#2c2a4a'}}
                        />
                            <TextInput
                                maxLength = {16}
                                clearButtonMode = 'always'
                                style = {globalStyles.input}
                                placeholderTextColor = {'#aaa'}
                                value = {nik}
                                keyboardType = 'numeric'
                                placeholder = 'Contoh: 3301230101980003'
                                onChangeText = {(value) => setNik(value)}
                            />           
                            <CustomButton name = 'URAIKAN' onPress = { () => inputNik() } />
                        </View>
                        <View style = {globalStyles.bottomWrapper}>
                            <View style = {globalStyles.boxRounded}>
                                <Text style = {globalStyles.boxTitle}>Terakhir kali diuraikan</Text>
                                <TouchableOpacity
                                activeOpacity = {0.7}
                                onPress = {() => (history != 'Belum ada' && setNik(history))}
                                >
                                    <Text style = {globalStyles.boxButton}>{history}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Container>
    )
}

export const About = ({ navigation }) => (
    <ScrollView style = {globalStyles.scrollFlex}>
        <Container>
            <View style = {globalStyles.screenTitleNoFlex}>
                <Text style = {globalStyles.textTitle}>Cara Kerja</Text>
                <Text style = {globalStyles.screenDescription}>Pelajari Bagaimana uNik bisa bekerja</Text>
            </View>
                <View style = {globalStyles.noFlexWrapper}>
                <Text style = {globalStyles.aboutTextTitle}>Deskripsi NIK: </Text>
                    <Text style = {globalStyles.aboutText}>NIK terdiri dari 16 digit. Kode penyusun NIK terdiri dari 2 digit awal merupakan kode provinsi, 2 digit setelahnya merupakan kode kota/kabupaten, 2 digit sesudahnya kode kecamatan, 6 digit selanjutnya merupakan tanggal lahir dalam format hhbbtt (untuk wanita tanggal ditambah 40), lalu 4 digit terakhir merupakan nomor urut yang dimulai dari 0001. </Text>
                    <Text style = {globalStyles.aboutText}>Sebagai contoh, misalkan seorang perempuan lahir di Kota Bandung tanggal 17 Agustus 1990 maka NIK-nya adalah: 10 50 24 570890 0001.</Text>
                    <Text style = {globalStyles.aboutText}>Apabila ada orang lain (perempuan) dengan domisili dan tanggal lahir yang sama mendaftar, maka NIK-nya adalah 10 50 24 570890 0002.</Text>
                    <Text style = {globalStyles.aboutText}>Apabila ada orang lain (laki-laki) dengan domisili dan tanggal lahir yang sama mendaftar, maka NIK-nya adalah 10 50 24 170890 0001.</Text>
                    <Text style = {globalStyles.aboutText}>Sumber: Wikipedia</Text>
                    <View style = {globalStyles.divider}></View>
                    <Text style = {globalStyles.aboutTextTitle}>Rumus NIK: </Text>
                    <Image
                        style = {{ width: '100%', height: 200}}
                        source = {require('../assets/rumus.jpg')}
                        resizeMode = 'contain'
                    />
                    <Text style = {globalStyles.aboutText}>Sumber: Ican Bachors</Text>
                    <View style = {globalStyles.divider}></View>
                    <Text style = {globalStyles.aboutTextTitle}>Catatan: </Text>
                    <Text style = {globalStyles.aboutText}>Aplikasi uNik tidak mengambil data-data pengguna, data yang dihasilkan merupakan hasil uraian dari tiap digit berdasarkan rumus diatas. Data tersebut merupakan data ketika NIK pertama kali dibuat, dan alamat tersebut bukan domisili pemilik NIK.</Text>
                    <View style = {globalStyles.divider}></View>
                    <Text style = {globalStyles.aboutTextTitle}>Referensi: </Text>
                    <Text style = {globalStyles.aboutText}>Deskripsi NIK: <Text style = {globalStyles.link} onPress = {() => Linking.openURL('https://id.wikipedia.org/wiki/Nomor_Induk_Kependudukan')}>Wikipedia</Text></Text>
                    <Text style = {globalStyles.aboutText}>nik_parse.js: <Text style = {globalStyles.link} onPress = {() => Linking.openURL('https://github.com/bachors/nik_parse.js')}>Ican Bachors</Text></Text>
                    <Text style = {globalStyles.aboutText}>Kampus: <Text style = {globalStyles.link} onPress = {() => Linking.openURL('http://www.stmikkomputama.ac.id/')}>STMIK Komputama Majenang</Text></Text>
                    <Text style = {globalStyles.aboutText}>Source code: <Text style = {globalStyles.link} onPress = {() => Linking.openURL('https://github.com/snowfluke/unikPenguraiNik')}>Awal Ariansyah</Text></Text>
                    <View style = {globalStyles.divider}></View>
                    <Text style = {globalStyles.aboutText}>Built with <Text style = {{fontWeight: 'bold', color: '#2c2a4a'}}>React Native</Text> by <Text style = {{fontWeight: 'bold', color: '#2c2a4a'}}>Awal Ariansyah</Text></Text>
                </View>
        </Container>
    </ScrollView>
    );

export const Result = ( { route, navigation }) => {
    const showToast = async (saveNik) => {
        try {
            const key = saveNik
            await AsyncStorage.setItem(key, saveNik)
            ToastAndroid.show("Berhasil menyimpan NIK", ToastAndroid.SHORT)
        }catch(err){
            ToastAndroid.show("Terjadi kesalahan", ToastAndroid.SHORT)
            alert(err)
        }
    }
    const { uNik } = route.params

    const capitalize = (words, splitter) => words
        .toLowerCase()
        .split(splitter)
        .map( word => word[0]
            .toUpperCase() + word
            .slice(1))
        .join(splitter)
    
        const templateData = [
            {key: 1, icon: 'person-outline', identifier: 'Usia: ', value: uNik.tambahan.usia},
            {key: 2, icon: 'account-circle', identifier: 'Jenis Kelamin: ', value: capitalize(uNik.kelamin, '-')},
            {key: 3, icon: 'calendar-today', identifier: 'Tanggal Lahir: ', value: uNik.tambahan.pasaran.split(',')[1]},
            {key: 4, icon: 'date-range', identifier: 'Pasaran: ', value: uNik.tambahan.pasaran.split(',')[0]},
            {key: 5, icon: 'cake', identifier: 'Ulang Tahun: ', value: uNik.tambahan.ultah},
            {key: 6, icon: 'map', identifier: 'Provinsi: ', value: capitalize(uNik.provinsi, ' ')},
            {key: 7, icon: 'place', identifier: 'Kab/Kota: ', value: capitalize(uNik.kotakab, ' ')},
            {key: 8, icon: 'home', identifier: 'Kecamatan: ', value: capitalize(uNik.kecamatan, ' ')},
            {key: 9, icon: 'code', identifier: 'Kode Pos: ', value: uNik.tambahan.kodepos},
            {key: 10, icon: 'qr-code', identifier: 'Urutan: ', value: uNik.uniqcode}
        ]

    const nikRender = templateData.map( (nikObject, index) => (
            <View key = {nikObject.key} style = {((index + 1 ) % 2 == 0) ? globalStyles.items2 : globalStyles.items}>
                <MaterialIcons 
                    name = {nikObject.icon}
                    size = {30}
                    style = {{color: '#2c2a4a'}}
                />
                <Text style = {globalStyles.item}>
                    {nikObject.identifier}
                    <Text style = {globalStyles.itemResult}>
                        {nikObject.value}
                    </Text>
                </Text>
            </View>
        )
    )

    return (
        <Container>
            <View style = {globalStyles.screenTitle}>
                <Text style = {globalStyles.textTitle}>{uNik.nik}</Text>
                <TouchableOpacity
                    onPress = {() => showToast(uNik.nik)}
                    activeOpacity = {0.7} 
                    style = {{
                        backgroundColor: '#2c2a4a',
                        width: '25%',
                        borderRadius: 15,
                        padding: 3,
                        alignSelf:'center'
                    }
                }>
                    <Text style = {{...globalStyles.screenDescription, color: '#dedede'}}>Simpan</Text>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.wrapper}>
                    <View style = {{...globalStyles.items, justifyContent: 'center'}}>
                        <MaterialIcons 
                            name = "timeline"
                            size = {50}
                            style = {{color: '#2c2a4a'}}
                        />
                    </View>
                <ScrollView
                    contentContainerStyle={{ 
                        width: '100%', 
                        flexGrow: 1,
                        paddingHorizontal: 15}}>
                    {nikRender}
                </ScrollView>
            </View>
        </Container>
    )}

export const Saved = ({ navigation }) => { 
    
    let [saved, setSaved] = useState([])

    const savedList = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys()
            if(keys !== null) setSaved(keys);
        } catch(err) {
            ToastAndroid.show("Terjadi kesalahan", ToastAndroid.SHORT)
            alert(err)
        }
    }

    const removeSaved = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
            ToastAndroid.show("Berhasil menghapus NIK", ToastAndroid.SHORT)
        } catch (err) {
            ToastAndroid.show("Terjadi kesalahan", ToastAndroid.SHORT)
            alert(err)
        }
    }

    let uNik

    const savedDetails = (nik) => {
        nikParse(nik, (result) => uNik = result.data )
        navigation.navigate('Hasil', { uNik: uNik})
    }

    savedList()
    const savedTemplate = saved.map((savedItem, index) => { 
            return { key: index.toString(), saved: savedItem } 
        }
    )

    return (
        <Container>
            <View style = {globalStyles.screenTitle}>
                    <Text style = {globalStyles.textTitle}>Daftar NIK Tersimpan</Text>
                    <Text style = {globalStyles.screenDescription}>Mempermudah tanpa perlu mengingat-ingat kembali</Text>
            </View>
            <View style = {globalStyles.wrapper}>
                <FlatList 
                    data = {savedTemplate} 
                    renderItem = {({ item }) => ( 
                        <View style = {globalStyles.saved}>
                            <TouchableOpacity
                                onPress = { () => savedDetails(item.saved) }
                                activeOpacity = {0.7}
                                style = {globalStyles.savedContainer}
                            >
                                <Text style = {globalStyles.savedItem}>{item.saved}</Text>
                            </TouchableOpacity>
                            <MaterialIcons
                                onPress = { () => removeSaved(item.saved) }
                                name = 'delete'
                                size = {30}
                                style = {{color: '#2c2a4a'}}
                            />
                        </View>
                    )}
                />
            </View>
        </Container>
    )
}

export const Developer = ({ navigation }) => (
    <Container>
        <View style = {globalStyles.screenTitle}>
            <Image
                style = {{ width: '100%', height: 100, borderRadius: 200}}
                source = {require('../assets/owner.png')}
                resizeMode = 'contain'
            />
            <Text style = {globalStyles.textTitle}>Awal Ariansyah</Text>
            <Text style = {globalStyles.screenDescription}>Anime Enthusiast, Developer, Tech Geek, Fast Learner, Secretary at Percasi Majenang</Text>
        </View>
        <View style = {{padding: 10,...globalStyles.wrapper}}>
            <Text style = {globalStyles.quotes}>"Kolom ini terlalu kecil."</Text>
            <Text style = {{textAlign: 'center', ...globalStyles.aboutText, marginVertical:2}}>- saya sendiri, 2019</Text>
            <View style = {globalStyles.divider}></View>
            <Text style = {globalStyles.aboutText}>Halo, salam kenal nama saya Awal Ariansyah, saya dari STMIK Komputama Majenang. Terima kasih banyak sudah mencoba aplikasi sederhana ini.</Text>
            <Text style = {globalStyles.aboutText}>Saya fokus mendalami bahasa pemrograman Javascript dan sudah mencoba banyak hal menggunakan Javascript seperti backend web dengan express, web game dengan HTML5 canvas, bot discord dengan discord.js, ekstensi chrome, desktop application dengan electron, dan yang terbaru adalah aplikasi ini, semoga bermanfaat. <Text style = {globalStyles.aboutTextTitle}>Salam kenal!</Text></Text>
            <View style = {globalStyles.divider}></View>
            <View style = {globalStyles.sosmed}>
            <MaterialCommunityIcons
                onPress = { () => Linking.openURL('https://github.com/snowfluke') }
                name = "github"
                size = {30}
                style = {globalStyles.sosmedItem}
            />
            <MaterialCommunityIcons
                onPress = { () => Linking.openURL('https://www.facebook.com/uso.taberu') }
                name = 'facebook'
                size = {30}
                style = {globalStyles.sosmedItem}
            />
            <MaterialCommunityIcons
                onPress = { () => Linking.openURL('https://api.whatsapp.com/send?phone=6283863434232&text=Halo,%20Awal!') }
                name = 'whatsapp'
                size = {30}
                style = {globalStyles.sosmedItem}
            />
            <MaterialCommunityIcons
                onPress = { () => Linking.openURL('mailto:awalariansyah7@gmail.com?subject=Salam%20Kenal&body=Halo,%20Awal!') }
                name = 'gmail'
                size = {30}
                style = {globalStyles.sosmedItem}
            />
            </View>
        </View>
    </Container>
);