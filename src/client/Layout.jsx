import styles from "./Layout.module.css";
import { NavLink } from "react-router-dom";
import { signInUrl as googleSignInUrl } from "@wasp/auth/helpers/Google";
import useAuth from "@wasp/auth/useAuth";
import logout from "@wasp/auth/logout";
import "./Base.css";

import { useGeneralStore } from "./stores/general.js";

import { CreatedWithWasp } from "./components/CreatedWithWasp.jsx";

export function Layout({ header = true, children }) {
  const activeClassName = styles.active;
  const { data: user } = useAuth();
  const introDismissed = useGeneralStore((state) => state.introDismissed);
  const dismiss = useGeneralStore((state) => state.dismiss);
  return (
    <>
      {header && (
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <NavLink to="/" activeClassName={activeClassName} exact>
              <h2 className={styles.title}>Phrase Tutor</h2>
            </NavLink>
            <NavLink to="/stats" activeClassName={activeClassName}>
              <h2 className={`${styles.title} ${styles.stats}`}>Stats</h2>
            </NavLink>
          </div>
          <div className={styles.headerSide}>
            {user ? (
              <div className={styles.user}>
                <div className={styles.profile}>
                  <img src={user.profilePicture} alt="" /> {user.username}
                </div>
                <a onClick={logout} href="#">
                  Logout
                </a>
              </div>
            ) : (
              <a href={googleSignInUrl}>Login</a>
            )}
          </div>
        </header>
      )}

      {!introDismissed && (
        <div className={styles.intro}>
          <p>
            Hey, welcome to Phrase Tutor. Let's learn Italian language by
            learning the 96 phrases we prepared.
          </p>
          <p>
            The system will first ask you all of the phrases. Then it will
            prioritise the phrases you didn't know. Just keep hitting next until
            you are 100% correct 😊
          </p>
          <p>
            <strong>Quick tutorial:</strong> when you see a phrase, try to
            remember the translation. If you know it, hit "I knew it", otherwise
            hit "Nope".
          </p>
          <div>
            <button className={styles.dismiss} onClick={dismiss}>
              Got it
            </button>
          </div>
        </div>
      )}

      {children}

      <footer className={styles.footer}>
        <div className={styles.footerBanner}>
          <CreatedWithWasp />
          <small>
            Check out the{" "}
            <a
              href="https://github.com/infomiho/phrase-tutor-wasp"
              target="_blank"
            >
              source code
            </a>
            .
          </small>
        </div>
      </footer>
    </>
  );
}
