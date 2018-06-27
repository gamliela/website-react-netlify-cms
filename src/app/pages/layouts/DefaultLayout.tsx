import * as React from "react";
import styled from "styled-components";

const TopNav = styled.div``;
const ASide = styled.aside``;
const Main = styled.main``;

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <TopNav>

        </TopNav>
        <ASide>

        </ASide>
        <Main>
          {this.props.children}
        </Main>
      </div>
    )
  }
}

export default DefaultLayout;