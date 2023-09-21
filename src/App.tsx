import {NLink, NButton, NTheme, useLocalStorage, THEMES} from 'nayan';
import { MoonStar, Sun, Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import Banner from "./components/Banner";

const App = () => {
  const [theme, setTheme] = useLocalStorage('THEME', THEMES.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  };

  return (
    <NTheme theme={theme}>
    <div className="h-screen w-screen items-center">
      <div className="container mx-auto p-5 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
        <div className="flex items-center col-span-1 lg:col-span-2">
          <div className="">
            <div className="text-4xl mb-5">Hello World 👋.</div>
            <div className="text-xl leading-relaxed mb-5">I'm <NLink>Niranjan Devasani.</NLink> a tech enthusiast with a diverse skill set. I specialize in developing web and mobile applications, ensuring seamless user experiences. As a Cloud and DevOps Engineer, I optimize applications for scalability and reliability in the cloud. I'm also passionate about open source, actively contributing to the community. Most notably, I'm the creator of <a href="https://nayanui.com" target="_blank" className="text-primary">Nayan UI</a>, a dynamic and innovative user interface that's setting new standards in design and functionality. 🔥</div>
            <div className="flex flex-row mb-5">
              <a href="https://github.com/ursnj" target="_blank" className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-full cursor-pointer mr-3" tabIndex={0} title="Niranjan Devasani Github"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/ursnj/" target="_blank" className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full cursor-pointer mr-3" tabIndex={0} title="Niranjan Devasani Linkedin"><Linkedin className="w-5 h-5" /></a>
              <a href="https://twitter.com/ursNjn" target="_blank" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full cursor-pointer mr-3" tabIndex={0} title="Niranjan Devasani Twitter"><Twitter className="w-5 h-5" /></a>
              <a href="mailto:niranjan.devasani@gmail.com" target="_blank" className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full cursor-pointer mr-3" tabIndex={0} title="Niranjan Devasani Email"><Mail className="w-5 h-5" /></a>
              <a href="tel:+917676677541" target="_blank" className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full cursor-pointer mr-3" tabIndex={0} title="Niranjan Devasani Mobile"><Phone className="w-5 h-5" /></a>
            </div>
            <div className="flex flex-row items-center">
              <a href={`${window.location.href}niranjan-devasani-resume.pdf`} target="_blank"><NButton>MY RESUME</NButton></a>
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
