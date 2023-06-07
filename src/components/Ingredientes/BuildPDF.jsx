import React, { Component } from 'react';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { withRouter } from '../../common/with-route';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 30,
    },
    description: {
        fontSize: 13,
        textAlign: 'absolute',
        marginBottom: 40,
    },
    instructions: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});

class BuildPDF extends Component {

    render() {
        const { data } = this.props;
        return (
            <div className="w-100">
                <div className='pdf-div'>
                    <PDFViewer className='pdf-view'>
                        <Document>
                            <Page size="A4" style={styles.body}>
                                <View style={styles.title}>
                                    <Text>{data.name}</Text>
                                </View>
                                <View style={styles.description}>
                                    <Text>{data.description}</Text>
                                </View>
                                <View style={styles.titulo}>
                                    <Text>Modo de Preparação</Text>
                                </View>
                                <View style={styles.instructions}>
                                    <Text>{data.instructions}</Text>
                                </View>
                                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                                    `${pageNumber} / ${totalPages}`
                                )} fixed />
                            </Page>
                        </Document>
                    </PDFViewer>
                </div>
            </div>
        )
    }
}

export default withRouter(BuildPDF);