import AppNavigationPage from "./navigation/AppNavigationPage";
import AppNavigationView from "./navigation/AppNavigationView";

function App() {
  return (
    <div>
      <AppNavigationPage render={AppNavigationView}/>
    </div>
  );
}

export default App;