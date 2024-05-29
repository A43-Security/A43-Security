import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useContext, useState } from 'react';
import selectList from "react-native-dropdown-select-list"

export default function ComanyScreen({ navigation }) {

    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")

    const stores = [
        "Aerie", "Aeropostale", "Against All odds", "American Eagle", "Box Lunch",
        "Champs", "Clarks", "Charlotte Russe", "Express", "Famous Footwear",
        "Gap", "H&M", "Hollister", "Hot Topic", "Journeys",
        "Journeys kidz", "Old Navy", "Lush", "Pink", "U.S.Polo Assin.",
        "Uniqlo", "Vans", "Victoria’s Secret", "Windsor Fashion", "Xbelta",
        "Zumiez", "Laced Up", "Ez Fix", "Icing", "Lids",
        "Lovisa", "Sunglass Hut", "Foot Locker", "Kids Foot Locker", "Xsport Fitness",
        "Olive Garden", "Kpot", "Sabrosito", "Koi Sushi", "Auntie Anne’s",
        "Billy Beez", "Charley’s Subs", "Chicken Now", "Chip city", "Cinnabon",
        "Crepes NYC", "Frozen D Lite", "Mama G’s Halal", "Master Wok", "Moe’s Southwest Grill",
        "Nathan’s Famous", "Sarku", "Sbarro", "Scotch Bonnet", "Starbucks",
        "Sweet & Sour", "Thai max", "Tiger King", "Vr Theme Park", "All About Toys",
        "Gateway News", "Rumi Life", "Spencers", "Bath & Body / Whitebarn Candle Co.", "G.D. Palace",
        "Kay Jewellers", "Pandora", "Piercing Pagoda Kiosk", "Swarovski", "Zales",
        "Mission Shoes", "T-Mobile", "Apple", "Dental", "Cohen’s",
        "GNC", "Perfumania", "Premier Hair & Beauty", "Royal Med Spa", "Victoria Nail",
        "Vista Eye Care", "Management", "House Keeping"
      ];

return(
        <View style={styles.container}> 
           <selectList 
           
           />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
    },

})