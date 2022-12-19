import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "../ResultImc";
import styles from "../Form/style";

export default function Form(){

const [altura, setAltura] = useState(null)
const [peso, setPeso] = useState(null)
const [messageImc, setMessageImc]= useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator(){
    return setImc((peso/(altura*altura)).toFixed(2))
}

function validationImc(){
    if (peso !=null && altura !=null){
        imcCalculator()
        setPeso(null)
        setAltura(null)
        setMessageImc("Seu IMC é igual:")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input} 
                placeholder="Ex. 1.75" 
                keyboardType="numeric"
                onChangeText={setAltura}
                value={altura}/>
                
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                style={styles.input}
                placeholder="Ex. 75.365" 
                keyboardType="numeric"
                onChangeText={setPeso}
                value={peso}/>

                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() =>{
                    validationImc()
                }}>
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}