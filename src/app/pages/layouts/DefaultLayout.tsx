import * as React from "react";

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                Home
              </a>
            </div>
          </div>
        </nav>
        <main className="container">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default DefaultLayout;