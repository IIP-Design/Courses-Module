import React from 'react';
import PropTypes from 'prop-types';

import { Collapse,
         CollapseItem,
         CollapsePanel,
         CollapseTrigger } from 'Lesson/components/Collapse';

import styles from 'Lesson/components/stylesheets/Glossary.scss';

const { array } = PropTypes;


/*
 * The Glossary of Terms component.
 *
 * @param {Object} props - The React props object.
 *
 * @since 1.0.0
 */

const renderTerm = (term) => {
  const { id, title, description } = term;

  return (
    <CollapseItem className={ `${ styles.term } glossary-item` } key={ id }>
      <CollapseTrigger
        className={ `${ styles.trigger } glossary-trigger` } 
        tag='button'>
        { title }
      </CollapseTrigger>
      <CollapsePanel className='glossary-text' description={ description } />
    </CollapseItem>
  );
};


const Glossary = (props) => {
  const { terms, language } = props;
  if (terms.length === 0) {
    return null;
  }

  const glossary = terms.map(term => renderTerm(term));

  return (
    <div className={ `${ styles.glossary } glossary` }>
      <h3 className={ `${ styles.title } glossary-title` }>{ language.glossary }</h3>
      <Collapse className={ `${ styles.terms } glossary-content` }>
        { glossary }
      </Collapse>
    </div>
  );
};


Glossary.propTypes = {
  terms: array
};


export default Glossary;
