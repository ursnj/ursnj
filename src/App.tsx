import { useEffect } from 'react';
import { NTheme, useLocalStorage, THEMES } from 'nayan';
import BannerImage from './components/BannerImage';
import BannerInfo from './components/BannerInfo';

const App = () => {
  const [theme] = useLocalStorage('THEME', THEMES.LIGHT);

  useEffect(() => {
    // Initialize Microsoft Clarity
    if (typeof window !== 'undefined' && !window.clarity) {
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', 'sz9jetteye');
    }
  }, []);

  return (
    <NTheme theme={theme}>
      <div className="h-screen w-screen items-center">
        <div className="container mx-auto p-3 h-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
            <div className="flex items-center col-span-1 md:col-span-7">
              <BannerInfo />
            </div>
            <div className="flex items-center col-span-1 md:col-span-5">
              <BannerImage />
            </div>
          </div>
        </div>
      </div>
    </NTheme>
  );
};

export default App;
