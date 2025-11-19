import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  }
  
  body {
  background-color: #121212;
  }
`

const tagColor = "#d7fa00";
const gray = "rgb(160, 160, 160)";

const MixinFlex = ({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  gap = 0,
  wrap = "nowrap"
}) => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
`;

const MixinFont = ({ size, weight=400 }) => `
  font-size: ${size};
  font-weight: ${weight};
`
const HeaderContainer = styled.header`
  ${MixinFlex({ justify: "space-between", align: "center" })}
  padding: 20px 20px;
  background-color: black;
  ul {
    ${MixinFlex({justify: "center", align: "center", gap: "20px"})}
    li {
      ${MixinFont({size: "16px", weight: 400})}
      list-style: none;
    }
  }
`

const Section = styled.section`
  ${MixinFlex({justify: "center", align: "center", wrap: "wrap", gap: "20px"})}
  padding: 20px 40px;
`

export const ContentContainer = styled.div`
  ${MixinFlex({direction: "column", align: "flex-start", gap: "5px"})}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${MixinFont({size: "12px"})}
    color: ${tagColor};
    border: 1px solid ${tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${MixinFont({size: "18px", weight: 600})}
  }
  p {
    ${MixinFont({size: "12px"})}
    color: ${gray};
  }
`

function App() {
  return (
    <main>
      <GlobalStyle />
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </main>
  );
}

export default App;
