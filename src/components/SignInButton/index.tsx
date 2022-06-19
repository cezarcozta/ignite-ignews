import { signIn, signOut, useSession } from 'next-auth/client';
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const [session] = useSession();

  const handleSignIn = async () => {
    try {
      await signIn('github');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      alert(err.message);
    }
  };

  return session ? (
    <button type="button" className={styles.signInButton} onClick={handleSignOut}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737388" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={handleSignIn}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
