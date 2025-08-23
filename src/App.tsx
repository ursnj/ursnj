import { NTheme, THEMES } from '@nayan-ui/react';
import BannerImage from './components/BannerImage';
import BannerInfo from './components/BannerInfo';

const App = () => {
  return (
    <NTheme theme={THEMES.LIGHT}>
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
