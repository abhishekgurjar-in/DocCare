import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../Database/firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInWithGoogle() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Store user data in Firestore
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: user.displayName,
        photo: user.photoURL,
      });

      toast.success("Logged in with Google successfully!", {
        position: "top-center",
      });

      window.location.href = "/profile"; // Redirect to the profile page after successful login
    } catch (error) {
      console.error("Google Sign-In Error: ", error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 mt-4"
    >
      Sign In with Google
    </button>
  );
}

export default SignInWithGoogle;
