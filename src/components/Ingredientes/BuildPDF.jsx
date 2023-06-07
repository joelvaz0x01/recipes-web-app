import React, { Component } from 'react';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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

class BuildPDF extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render() {
        const { recipe } = this.state.data;
        console.log(recipe);
        return (
            <>
                {
                    recipe === undefined
                        ? <div></div>
                        : <div className="w-100">
                            {console.log(recipe)}
                            <div className='pdf-div'>
                                <PDFViewer className='pdf-view'>
                                    <Document>
                                        <Page size="A4" style={styles.page}>
                                            <View style={styles.section}>
                                                <Text>{recipe.name}</Text>
                                            </View>
                                            <View style={styles.titulo}>
                                                <Text>Descrição</Text>
                                            </View>
                                            <View style={styles.section}>
                                                <Text>{recipe.description}</Text>
                                            </View>
                                            <View style={styles.titulo}>
                                                <Text>Modo de Preparação</Text>
                                            </View>
                                            <View style={styles.section}>
                                                <Text>{recipe.instructions}</Text>
                                            </View>
                                        </Page>
                                    </Document>
                                </PDFViewer>
                            </div>
                        </div>
                }
            </>
        )
    }
}

export default BuildPDF;