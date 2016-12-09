import React from 'react';
import Accordion from 'aria-accordion';

const { string, array } = React.PropTypes;

const CollapseItem = (props) => (<li className={ `collapse-item ${ props.className }` }>{ props.children }</li>);


const Collapse = React.createClass({
  propTypes: {
    className: string,
    children: array
  },

  componentDidMount() {
    const selectors = { body: '.collapse', trigger: '.trigger' };
    const options = { collapseOthers: true };

    new Accordion.Accordion(selectors, options);
  },

  render() {
    return (
      <ul className={ `collapse ${ this.props.className }` } role='tablist'>{ this.props.children }</ul>
    );
  }
});


const CollapsePanel = React.createClass({
  propTypes: {
    description: string.isRequired
  },

  rawDescription() {
    return { __html: this.props.description }
  },

  render() {
    return(
      <div role='tabpanel' dangerouslySetInnerHTML={ this.rawDescription() }></div>
    );
  }
});


const CollapseTrigger = (props) => {
  const CustomTag = `${ props.tag }`;

  return (
    <CustomTag className={ `trigger ${ props.className }` } role='tab'>{ props.children }</CustomTag>
  );
};


CollapseItem.propTypes = {
  className: string,
  children: array
};


CollapseTrigger.propTypes = {
  className: string,
  children: string,
  tag: string.isRequired
};


export { CollapseItem, Collapse, CollapsePanel, CollapseTrigger };

