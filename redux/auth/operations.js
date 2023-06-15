import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { auth } from '../../config';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const registerDB =createAsyncThunk(
    'auth/register',
    async ({ login, email, password }) => {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
          throw error;
        }
    }
    );


  export const loginDB = createAsyncThunk(
    'auth/login', 
    async ({ email, password }) => {
     try {
       const credentials = await signInWithEmailAndPassword(auth, email, password);
           return credentials.user;
     } catch (error) {
       throw error;
     }
   }
  );


  const updateUserProfile = async (update) => {

    const user = auth.currentUser;
  
    // якщо такий користувач знайдений
    if (user) {
  
    // оновлюємо його профайл
          try {
              await updateProfile(user, update);
          } catch(error) {
              throw error
          }
    }
  };