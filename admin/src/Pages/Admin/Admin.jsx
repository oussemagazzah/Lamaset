
import './admin.css'
import Sidebar from '../../Components/sidebar/sidebar'
import {Routes,Route} from 'react-router-dom'
import Addproduct from '../../Components/addproduct/addproduct'
import Listproduct from '../../Components/listproduct/listproduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/listproduct' element={<Listproduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin
