import React from 'react';
import Accordion from 'aria-accordion';
import PropTypes from 'prop-types';

const { string, array } = PropTypes;




/*
 * The wrapping component for an individual collapsable component. Wraps CollapseTrigger and CollapsePanel.
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const CollapseItem = (props) => (<li className={ `collapse-item ${ props.className }` }>{ props.children }</li>);


CollapseItem.propTypes = {
  className: string,
  children: array
};


/*
 * The 508-compliant Collapse component. Wraps each CollapseItem.
 *
 * @since 1.0.0
 */

class Collapse extends React.Component{
  componentDidUpdate() {
    this.initializeAccordian();
  }

  componentDidMount() {
    this.initializeAccordian();
  }

  initializeAccordian() {
    if( this.accordion ) {
      this.accordion.destroy();
    }
    const selectors = { body: '.collapse', trigger: '.trigger' };
    const options = { collapseOthers: true };

    this.accordion = new Accordion.Accordion(selectors, options);
  }

  render() {
    const { className, children } = this.props;
    return (
      <ul className={`collapse ${className}`} role="tablist">
        {children}
      </ul>
    );
  }
};


Collapse.propTypes = {
  className: string,
  children: array
};


/*
 * The collapsable content area that is show/hidden
 *
 * @since 1.0.0
 */

const CollapsePanel = props => {
  const rawDescription = props => {
    return { __html: props.description }
  }

  return (
    <div
      role='tabpanel'
      dangerouslySetInnerHTML={ rawDescription(props) }>
    </div>
  );
};


CollapsePanel.propTypes = {
  description: string.isRequired
}


/*
 * The trigger that collapses each CollapsePanel
 *
 * @params {Object} props - The React props object
 *
 * @since 1.0.0
 */

const CollapseTrigger = (props) => {
  const { tag,
          className,
          children } = props;

  const CustomTag = `${ tag }`;

  return (
    <CustomTag className={ `trigger ${ className }` } role='tab'>{ children }</CustomTag>
  );
};


CollapseTrigger.propTypes = {
  className: string,
  children: string,
  tag: string.isRequired
};


export { CollapseItem, Collapse, CollapsePanel, CollapseTrigger };

