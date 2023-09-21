import { NTheme, useLocalStorage, THEMES } from 'nayan';
import BannerImage from "./components/BannerImage";
import BannerInfo from "./components/BannerImage";

const App = () => {
  const [theme] = useLocalStorage('THEME', THEMES.LIGHT);

  return (
    <NTheme theme={theme}>
      <div className="h-screen w-screen items-center">
        <div className="container mx-auto p-3 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
            <div className="flex items-center col-span-1 lg:col-span-2">
              <BannerInfo />
            </div>
            <div className="flex items-center">
              <BannerImage />
            </div>
          </div>
        </div>
      </div>
    </NTheme>
  );
};

export default App
