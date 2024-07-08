import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background:{
        flex: 1,
        width: '100%', // Ensure background fills the entire screen horizontally
        height: '100%',
        resizeMode: 'cover',
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
    },
    label: {
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'System',
        fontSize: 20,
        textAlign: 'center',
    },
});