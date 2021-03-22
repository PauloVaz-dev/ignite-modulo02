import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { MoviesProvider } from './MovieContex';
import { Content } from './components/Content';



export function App() {


  return (
      <MoviesProvider>
        <div style={{ display: 'flex', flexDirection: 'row' }}>

        <SideBar/>
        <Content/>
        </div>
     </MoviesProvider>



  )
}
