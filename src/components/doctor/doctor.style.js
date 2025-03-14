import {COLORS, FONT_SIZE} from "../../constants/theme"

export const styles = {
     
    doctor:{
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: COLORS.gray4,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 6
    },

    name:{
        marginTop: 5,
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginTop: 5
        
    },


    specialty:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray1,
        
    }, 

    icon:{
        with:50,
        height:50,
        marginRight: 8 ,
        resizeMode: 'contain', 
    }

  


    
}