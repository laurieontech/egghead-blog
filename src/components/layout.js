/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Helmet } from "react-helmet"
import {Link} from "gatsby"

const bodyStyles = {
    m: `2rem`,
    padding: `1rem`,
}

const mainStyles = {
    maxWidth: `container`,
    padding: `1rem`,
    mx: `auto`,
}

const Layout = ({children}) => (
    <div sx={bodyStyles}>
        <Helmet         
        title={`My site`}
        htmlAttributes={{lang: `en`}}/>
        <header>
            <h1>            
                <Link to="/">Home</Link>
            </h1>
        </header>
        <main sx={mainStyles}>{children}</main>
        <footer><p>A fun footer</p></footer>
    </div>
)

export default Layout