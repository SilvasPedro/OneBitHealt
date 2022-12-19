import React from "react";
import { View, Text, } from "react-native";
import styles from "../ResultImc/style"

export default function ResultImc(props){
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}