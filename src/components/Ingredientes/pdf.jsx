import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './ingredientes.css'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    titulo: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        fontSize: 20
    }
});

// Create Document Component
class MyDocument extends Component {

    render() {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        {/* <Text>{recipes.name}</Text> */}
                    </View>
                    <View style={styles.titulo}>
                        <Text>Descrição</Text>
                    </View>
                    <View style={styles.section}>
                        {/* <Text>{recipes.description}</Text> */}
                    </View>
                    <View style={styles.titulo}>
                        <Text>Modo de Preparação</Text>
                    </View>
                    <View style={styles.section}>
                        {/* <Text>{recipes.instructions}</Text> */}
                    </View>
                </Page>
            </Document>
        )
    }
};
export default MyDocument;