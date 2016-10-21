const React = require('react')

const MainLayout = (props) => {
    return (
      <div className="app">
        <div className="breadcrumb">Breadcrumb</div>
        <main>
          {props.children}
        </main>
      </div>
    );
};

const { object } = React.PropTypes;

MainLayout.propTypes = {
  children: object
}

module.exports = MainLayout;
