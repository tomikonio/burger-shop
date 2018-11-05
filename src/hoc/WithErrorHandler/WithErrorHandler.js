import React, { Component, Fragment } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const WithErrorHandler = (WrrapedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.responsetInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    state = {
      error: null
    };

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responsetInterceptor);
    }

    render() {
      return (
        <Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrrapedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default WithErrorHandler;
