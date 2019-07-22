/* eslint-disable class-methods-use-this */
import React from 'react';
import App, { Container } from 'next/app';
import { PageTransition } from 'next-page-transitions';

// Styles
import 'normalize.css';
import 'styles/shared.css';

// Components
interface IAppState {
  loggedIn: boolean;
  events: string[];
}

class Root extends App<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loggedIn: false,
      events: [
        'load',
        'mousemove',
        'mousedown',
        'click',
        'scroll',
        'keypress',
        'keydown',
        'keyup',
        'scroll',
        'mouseover',
      ],
    };
  }

  public render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <PageTransition
          classNames="page-transition"
          timeout={300}
        >
          <Component
            {...pageProps}
            key={router.route}
          />
        </PageTransition>
      </Container>
    );
  }
}

export default Root;
