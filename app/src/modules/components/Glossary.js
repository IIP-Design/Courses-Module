import React from 'react';

const { Collapse, CollapseItem, CollapsePanel, CollapseTrigger } = require('./Collapse.js');
const { array } = React.PropTypes;

const Glossary = (props) => {
  if (props.terms.length === 0) {
    return (<div/>);
  }

  const glossary = props.terms.map((term) => {
    <CollapseItem key={ term.id }>
      <CollapseTrigger tag={ 'p' }>{ term.title }</CollapseTrigger>
      <CollapsePanel description={ term.description } />
    </CollapseItem>
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

Glossary.propTypes = {
  terms: array
}


module.exports = Glossary;
