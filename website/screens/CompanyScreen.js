import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useContext, useState } from 'react';
import {SelectList} from "react-native-dropdown-select-list"
import UserContext from '../context/UserContext';

export default function CompanyScreen({ navigation }) {

    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")
    const {company, setCompany} = useContext(UserContext)

    const stores = [
      { key: "Aerie", value: "Aerie" }, { key: "Aeropostale", value: "Aeropostale" }, { key: "Against All odds", value: "Against All odds" }, { key: "American Eagle", value: "American Eagle" },
      { key: "Box Lunch", value: "Box Lunch" }, { key: "Champs", value: "Champs" }, { key: "Clarks", value: "Clarks" }, { key: "Charlotte Russe", value: "Charlotte Russe" },
      { key: "Express", value: "Express" }, { key: "Famous Footwear", value: "Famous Footwear" }, { key: "Gap", value: "Gap" }, { key: "H&M", value: "H&M" },
      { key: "Hollister", value: "Hollister" }, { key: "Hot Topic", value: "Hot Topic" }, { key: "Journeys", value: "Journeys" }, { key: "Journeys kidz", value: "Journeys kidz" },
      { key: "Old Navy", value: "Old Navy" }, { key: "Lush", value: "Lush" }, { key: "Pink", value: "Pink" }, { key: "U.S.Polo Assin.", value: "U.S.Polo Assin." },
      { key: "Uniqlo", value: "Uniqlo" }, { key: "Vans", value: "Vans" }, { key: "Victoria’s Secret", value: "Victoria’s Secret" }, { key: "Windsor Fashion", value: "Windsor Fashion" },
      { key: "Xbelta", value: "Xbelta" }, { key: "Zumiez", value: "Zumiez" }, { key: "Laced Up", value: "Laced Up" }, { key: "Ez Fix", value: "Ez Fix" },
      { key: "Icing", value: "Icing" }, { key: "Lids", value: "Lids" }, { key: "Lovisa", value: "Lovisa" }, { key: "Sunglass Hut", value: "Sunglass Hut" },
      { key: "Foot Locker", value: "Foot Locker" }, { key: "Kids Foot Locker", value: "Kids Foot Locker" }, { key: "Xsport Fitness", value: "Xsport Fitness" }, { key: "Olive Garden", value: "Olive Garden" },
      { key: "Kpot", value: "Kpot" }, { key: "Sabrosito", value: "Sabrosito" }, { key: "Koi Sushi", value: "Koi Sushi" }, { key: "Auntie Anne’s", value: "Auntie Anne’s" },
      { key: "Billy Beez", value: "Billy Beez" }, { key: "Charley’s Subs", value: "Charley’s Subs" }, { key: "Chicken Now", value: "Chicken Now" }, { key: "Chip city", value: "Chip city" },
      { key: "Cinnabon", value: "Cinnabon" }, { key: "Crepes NYC", value: "Crepes NYC" }, { key: "Frozen D Lite", value: "Frozen D Lite" }, { key: "Mama G’s Halal", value: "Mama G’s Halal" },
      { key: "Master Wok", value: "Master Wok" }, { key: "Moe’s Southwest Grill", value: "Moe’s Southwest Grill" }, { key: "Nathan’s Famous", value: "Nathan’s Famous" }, { key: "Sarku", value: "Sarku" },
      { key: "Sbarro", value: "Sbarro" }, { key: "Scotch Bonnet", value: "Scotch Bonnet" }, { key: "Starbucks", value: "Starbucks" }, { key: "Sweet & Sour", value: "Sweet & Sour" },
      { key: "Thai max", value: "Thai max" }, { key: "Tiger King", value: "Tiger King" }, { key: "Vr Theme Park", value: "Vr Theme Park" }, { key: "All About Toys", value: "All About Toys" },
      { key: "Gateway News", value: "Gateway News" }, { key: "Rumi Life", value: "Rumi Life" }, { key: "Spencers", value: "Spencers" }, { key: "Bath & Body / Whitebarn Candle Co.", value: "Bath & Body / Whitebarn Candle Co." },
      { key: "G.D. Palace", value: "G.D. Palace" }, { key: "Kay Jewellers", value: "Kay Jewellers" }, { key: "Pandora", value: "Pandora" }, { key: "Piercing Pagoda Kiosk", value: "Piercing Pagoda Kiosk" },
      { key: "Swarovski", value: "Swarovski" }, { key: "Zales", value: "Zales" }, { key: "Mission Shoes", value: "Mission Shoes" }, { key: "T-Mobile", value: "T-Mobile" },
      { key: "Apple", value: "Apple" }, { key: "Dental", value: "Dental" }, { key: "Cohen’s", value: "Cohen’s" }, { key: "GNC", value: "GNC" },
      { key: "Perfumania", value: "Perfumania" }, { key: "Premier Hair & Beauty", value: "Premier Hair & Beauty" }, { key: "Royal Med Spa", value: "Royal Med Spa" }, { key: "Victoria Nail", value: "Victoria Nail" },
      { key: "Vista Eye Care", value: "Vista Eye Care" }, { key: "Management", value: "Management" }, { key: "House Keeping", value: "House Keeping" }
    ];
    
    const handleSubmit = () => {
      setCompany(category)
      navigation.navigate('Photo Identification')
    }
return(
        <View style={styles.container}> 
           <SelectList 
             setSelected={setCategory}
             data={stores}
             placeholder={"Select Store"}
             defaultOption={{ key: "Aerie", value: "Aerie" }}
           />
           <Button
           title={"Submit"}
           onPress={handleSubmit}
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