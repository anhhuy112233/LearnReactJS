import Button from "./components/Button/index";
import GlobalStyles from "./components/GlobalStyle";

export default function App() {
  return (
    <GlobalStyles>
      <div>
        <Button />
        <Button primary />
        <Button primary disabled>Click me</Button>
      </div>
    </GlobalStyles>
  );
}
