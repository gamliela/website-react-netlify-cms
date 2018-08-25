import * as React from "react";

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>
        </nav>
        <main className="main">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default DefaultLayout;