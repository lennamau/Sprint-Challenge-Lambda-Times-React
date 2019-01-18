import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    let selectedClass =  "";

    if (props.tab === props.selectedTab) {
      selectedClass = "tab active-tab";
    } else {
      selectedClass = "tab";
    }


  return (
    <div
      className={selectedClass}
      onClick = {() => {
        props.selectTabHandler(props.tab);
      }} 
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
  Tab.propTypes = {
    tab: PropTypes.string,
    selectTabHandler: PropTypes.func,
    selectedClass: PropTypes.string
  }

export default Tab;

