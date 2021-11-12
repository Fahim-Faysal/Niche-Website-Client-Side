import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../pages/Firebase/FIrebase.init";



initilizeAuthentication()


const useFireabse = () => {
      const [user, setUser] = useState({})
      const [error, setError] = useState('')
      const [isLoading, setIsLoading] = useState(true);
      const [admin, setAdmin] = useState(false)

      const auth = getAuth();

      const registerWithEmail = (email, password, name, history) => {
            setIsLoading(true)
            createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                        setError('')
                        const newUser = { email, displayName: name };
                        setUser(newUser)
                        saveUser(email, name)
                        updateProfile(auth.currentUser, {
                              displayName: name
                        }).then(() => {

                        }).catch((error) => {

                        });
                        history.replace('/')
                  })
                  .catch((error) => {

                        setError(error.message)

                  })
                  .finally(() => setIsLoading(false));
      }

      const emailSignIn = (email, password, history, location) => {
            setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                        const destination = location?.state?.from || '/'
                        history.replace(destination)
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

      useEffect(() => {
            fetch(`https://immense-reaches-13014.herokuapp.com/user/${user?.email}`)
                  .then(res => res.json())
                  .then(data => setAdmin(data.admin))
      }, [user.email])

      const emailSignOut = () => {
            setIsLoading(true)
            signOut(auth).then(() => {

            }).catch((error) => {
                  setError(error.message)
            })
                  .finally(() => setIsLoading(false));
      }
      const saveUser = (email, displayName) => {
            const user = { email, displayName };
            fetch('https://immense-reaches-13014.herokuapp.com/users', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)
            })
                  .then()
      }
      return {
            user,
            admin,
            error,
            isLoading,
            registerWithEmail,
            emailSignIn,
            emailSignOut
      }

}
export default useFireabse;