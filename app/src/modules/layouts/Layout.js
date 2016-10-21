const React = require('react')

const Layout = (props) => (
    {props.children}
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout