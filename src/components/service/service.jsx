import {View, Text} from "react-native";
import Button from "../../components/button/button"
import { styles } from "./service.style";

function Service(props){

    return <View style={styles.service}>
        <View style={styles.containerText}>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.price}>{
                new Intl.NumberFormat("pt-BR", {
                    style: "currency",currency: "BRL"
                    }).format(props.price)
            }</Text>
        </View>
        <View style={styles.containerButton}>
            <Button text="Agendar" onPress={()=> props.onPress(props.id_service)}/>
        </View>
    </View>
}

export default Service;