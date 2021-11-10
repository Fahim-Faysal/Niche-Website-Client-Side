import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../pages/Firebase/FIrebase.init";



initilizeAuthentication()


const useFireabse = () => {
      const [user, setUser] = useState({})
      const [error, setError] = useState('')
      const [isLoading, setIsLoading] = useState(true);

      const auth = getAuth();

      const registerWithEmail = (email, password) => {
            setIsLoading(true)
            createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {

                        setError('')
                  })
                  .catch((error) => {

                        setError(error.message)

                  })
                  .finally(() => setIsLoading(false));
      }

      const emailSignIn = (email, password) => {
            setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                        setError('')
                  })
                  .catch((error) => {
                        setError(error.message)
                  })
                  .finally(() => setIsLoading(false));
      }

      useEffect(() => {
            const unsubscribed = onAuthStateChanged(auth, (user) => {
                  if (user) {
                        setUser(user)
                  } else {
                        setUser({})
                  }
                  setIsLoading(false)
            });
            return () => unsubscribed
      }, [])

      const emailSignOut = () => {
            setIsLoading(true)
            signOut(auth).then(() => {

            }).catch((error) => {
                  setError(error.message)
            })
                  .finally(() => setIsLoading(false));
      }
      return {
            user,
            error,
            isLoading,
            registerWithEmail,
            emailSignIn,
            emailSignOut
      }

}
export default useFireabse;