import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes ={ // Context is like a props but lets us to skip levels of hierarchy. It must be formated so it can't be abused too much
      router: React.PropTypes.object
    };

    componentWillMount() {
      if (!this.props.authenticated){
        this.context.router.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      //console.log(this.context);
      //console.log('rendering', ComposedComponent);
      //console.log("this.props.authenticated",this.props.authenticated);
      return <ComposedComponent {...this.props}/>; //
    }
  }

  function mapStateToProps(state){
    return { authenticated: state.authenticated};
  }

  return connect(mapStateToProps)(Authentication);
}




//How to use HOC

// In some other location.. Not in this file...
// We want to use this HOC

//import Authentication // This is my HOC
//import Resources // This is the component I want to wrap

//const ComposedComponent = Authentication(Resources);

//In some render method...
//<ComposedComponent resources={resourceList}/>