import { useStore } from '../store/useStore'
import ContactList from './ContactList'
import ChatBox from './helping_components/ChatBox'
import  Navbar  from './Navbar'

const Layout = () => {

  const {isDark, count} = useStore()

  return (
    <div data-theme={`${isDark ? 'dim': 'cupcake'}`}  className=" h-screen w-full flex flex-col md:flex-row  " >
          <div className={` ${ count == 1 ? 'block' : 'hidden' } md:block md:w-[25%]`} >
            <Navbar/>
            <ContactList/>
          </div>
          <ChatBox/>
    </div>
  )
}

export default Layout