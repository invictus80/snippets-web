// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START update_delete_field_modular]
import { doc, collection, updateDoc, deleteField } from "firebase/firestore";

const cityRef = doc(collection(db, 'cities'), 'BJ');

// Remove the 'capital' field from the document
await updateDoc(cityRef, {
    capital: deleteField()
});
// [END update_delete_field_modular]