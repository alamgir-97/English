import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    console.log(user);
    // ...
  }).catch((error) => {

    // Handle Errors here.
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

        }

    return (
        <div>
            <h1>Login</h1>
            <button className="btn" onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;