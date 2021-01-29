
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import NavbarInfo from './layout/NavBar'
import Footer from './layout/Footer'


const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <NavbarInfo/>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
