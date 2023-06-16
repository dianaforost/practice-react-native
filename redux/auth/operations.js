import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile
} from 'firebase/auth';
import { auth } from '../../config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
export const registerDB = createAsyncThunk(
    'auth/register',
    async ({ login, email, password }) => {
        try {
          const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, {
      displayName: login,
    });


    return user;
        } catch (error) {
          console.log(error);
          return Alert.alert("Your login, email or password is wrong or already exists")
        }
    }
    );


  export const loginDB = createAsyncThunk(
    'auth/login', 
    async ({ email, password }) => {
     try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: user.displayName,
      });
  
      return user;
     } catch (error) {
       throw error;
     }
   }
  );

export const signOutUser = createAsyncThunk('auth/signOut', async () =>{
  const signOut = await signOut(auth)
})