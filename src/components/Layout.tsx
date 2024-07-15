import  Navbar  from './Navbar'
import Tab from './Tab'

const Layout = () => {
  return (
    <div className=" h-screen " >
      <Navbar/>
      <Tab/>
      <div className=' bg-red-500 w-full h-screen ' ></div>
    </div>
  )
}

export default Layout