import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile
} from 'firebase/auth';
import { auth } from '../../config';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const registerDB =createAsyncThunk(
    'auth/register',
    async ({ login, email, password }) => {
        try {
          const { user } = await createUserWithEmailAndPassword(auth, email, password);
    console.log(`User ${user} created`);
    await updateProfile(user, {
      displayName: login,
    });
    console.log('User profile updated');
    return user;
        } catch (error) {
          throw error;
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
  
      return {user, updateProfile};
     } catch (error) {
       throw error;
     }
   }
  );

export const signOutUser = createAsyncThunk('auth/signOut', async () =>{
  const signOut = await signOut(auth)
})
  // const updateUserProfile = async (update) => {

  //   const user = auth.currentUser;
  
  //   // якщо такий користувач знайдений
  //   if (user) {
  
  //   // оновлюємо його профайл
  //         try {
  //             await updateProfile(user, update);
  //         } catch(error) {
  //             throw error
  //         }
  //   }
  // };