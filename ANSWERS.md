- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

        PropTypes are use to validate and type check the data that is getting passed in or inputted into the React App to make sure it is the correct data. It is important because errors and bugs can be prevented before they are introduced into the app.

- [x] Describe a life-cycle event in React?
        There are 3 phases in component’s life in a React app: 
            Mounting/Birth - the initial rendering of the component, 
            Updating/Growth – used to change state of a component usually by setState and new props
            Unmounting/Death – removes component from screen – uses componentWillUnmount for clean up.

- [x] Explain the details of a Higher Order Component?

        A High Order Component uses a component that is passed in to add functionality to existing component while using it’s existing attributes and returns a new component. 

- [x] What are three different ways to style components in React? Explain some of the benefits of each.
        CSS in a separate style sheet - keeps code shorter and cleaner looking
	    
        Inline CSS styles - writing css on the HTML/JSX elements directly
        
        Styled components - styling library for React, CSS in JS – can use Javascript 	to write CSS and use props and functions in CSS. Component styles are reusable
	    
        Reactstrap – bootstrap library for react – contains many pre styled elements that would save a lot of time. 
