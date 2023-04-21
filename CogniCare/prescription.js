// Example of Searchable Dropdown / Picker in React Native
// https://aboutreact.com/example-of-searchable-dropdown-picker-in-react-native/
import { getDatabase, ref, set } from "firebase/database";
import {auth} from "./Firebase/firebase";

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet,Button, Text, View} from 'react-native';

// import SearchableDropdown component
import SearchableDropdown from 'react-native-searchable-dropdown';
//const [selectedItem, setSelectedItem] = useState(null);
//const [selectedItems, setSelectedItems] = useState([]);

var drugs = new Array();

function writeprescription(userId, drug) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      drugs : drug
    });
  }


// Item array for the dropdown
const items = [
  // name key is must. It is to show the text in front
  {id: 1, name: 'Apixaban (eliquis)'},
  {id: 2, name: 'Aricept'},
  {id: 3, name: 'Aripiprazole'},
  {id: 4, name: 'Aspirin'},
  {id: 5, name: 'Atenolol'},
  {id: 6, name: 'Atorvastatin (lipitor)'},
  {id: 7, name: 'Bumetanide (bumex)'},
  {id: 8, name: 'Carvedilol'},
  {id: 9, name: 'Chlorothiazide (diuril)'},
  {id: 10, name: 'Dabigatran (pradaxa)'},
  {id: 11, name: 'Digoxin'},
  {id: 12, name: 'Dilacor'},
  {id: 13, name: 'Edoxaban (lixiana)'},
  {id: 14, name: 'Exelon'},
  {id: 15, name: 'Furosemide (lasix)'},
  {id: 16, name: 'Hydrochlorothiazide (hctz)'},
  {id: 17, name: 'Ibuprofen'},
  {id: 18, name: 'Metformin'},
  {id: 19, name: 'Metoprolol Succinate'},
  {id: 20, name: 'Metoprolol Tartrate'},
  {id: 21, name: 'Naproxen'},
  {id: 22, name: 'Norvasc'},
  {id: 23, name: 'Olanzapine'},
  {id: 24, name: 'Quetiapine'},
  {id: 25, name: 'Atenolol'},
  {id: 26, name: 'Razadyne'},
  {id: 27, name: 'Risperidone'},
  {id: 28, name: 'Rivaroxaban (xarelto)'},
  {id: 29, name: 'Spironolactone (aldactone)'},
  {id: 30, name: 'Verelan'},
  {id: 31, name: 'Ziprasidone'},
];

const prescription = ({ navigation }) => {
  // Data Source for the SearchableDropdown
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetch('https://abooutreactapis.000webhostapp.com/demosearchables.php')
      .then((response) => response.json())
      .then((responseJson) => {
        //Successful response from the API Call
        setServerData(responseJson.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handlePrescription = () => {
    // Handle onboarding logic here
    navigation.navigate("Dashboard");
    writeprescription(auth.currentUser.uid,drugs)
    console.log(drugs);
   
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Prescription
        </Text>
        <Text style={styles.headingText}>
          Medication
        </Text>
        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          // Listner on the searchable input
          onItemSelect={(item) => {
            drugs.push(item.name)
            alert(JSON.stringify(item.name))
          }}
          // Called after the selection---------------------------------- show selection and add to data base
          containerStyle={{padding: 5}}
          // Suggestion container style
          textInputStyle={{
            // Inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            // Single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            // Text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            // Items container style you can pass maxHeight
            // To restrict the items dropdown hieght
            maxHeight: '60%',
          }}
          items={items}
          // Mapping of item array
          defaultIndex={2}
          // Default selected item index
          placeholder="placeholder"
          // place holder for the search input
          resPtValue={false}
          // Reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          // To remove the underline from the android input
        />
        
      </View>
      <Button title="Complete Prescription" onPress={handlePrescription} />
      
    </SafeAreaView>
  );
};

export default prescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
  
  
});