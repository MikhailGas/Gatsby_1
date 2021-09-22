import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteHeader }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteHeader.title}
        </Link>
      </h1>
      <p style={{
        color: 'white',
        marginTop: '5px'
      }}>
        {siteHeader.description}
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteHeader: PropTypes.object,
}

Header.defaultProps = {
  siteHeader: {},
}

export default Header
