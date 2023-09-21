import {NLink, NButton, NTheme, useLocalStorage, THEMES} from 'nayan';
import { MoonStar, Sun } from 'lucide-react';
import Banner from "./components/Banner";

const App = () => {
  const [theme, setTheme] = useLocalStorage('THEME', THEMES.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  };
  return (
    <NTheme theme={theme}>
    <div className="h-screen w-screen items-center">
      <div className="container mx-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="flex items-center">
        <div className="p-5">
          <div className="text-4xl mb-5">Hello World 👋.</div>
          <div className="text-xl leading-relaxed mb-5">I'm <NLink>Niranjan Devasani.</NLink> Web and Mobile application developer, Cloud and Devops Engineer, Opensource Contributor and Creator of <a href="https://nayanui.com" target="_blank" className="text-primary">Nayan UI 🔥</a>.</div>
          <div className="flex flex-row">

          </div>
          <div className="flex flex-row items-center">
            <NButton>RESUME</NButton>
            <span tabIndex={0} className="cursor-pointer ml-4" onClick={toggleTheme} title="Theme Switch">
              {theme !== THEMES.DARK && <MoonStar className="w-6 h-6 text-text inline" />}
              {theme === THEMES.DARK && <Sun className="w-6 h-6 text-text inline" />}
            </span>
          </div>
        </div>
        </div>
        <div className="flex items-center">
        <div className=" mx-auto">
          <Banner />
        </div>
        </div>
      </div>
      </div>
    </div>
    </NTheme>
  );
};

export default App
