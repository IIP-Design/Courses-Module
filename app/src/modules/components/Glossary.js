const React = require('react');
const { Collapse, CollapseItem, CollapsePanel, CollapseTrigger } = require('./Collapse.js');

const Glossary = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    if (this.props.data.length === 0) {
      return (<div/>);
    }

    const glossary = this.props.data.map(function(term) {
      return (
        <CollapseItem key={ term.id }>
          <CollapseTrigger tag={ 'p' }>{ term.title }</CollapseTrigger>
          <CollapsePanel>{ term.description }</CollapsePanel>
        </CollapseItem>
      );
    });

    return (
      <div>
        <h3>Glossary of Terms</h3>
        <Collapse>
          { glossary }
        </Collapse>
      </div>
    );
  }
});

module.exports = Glossary;
