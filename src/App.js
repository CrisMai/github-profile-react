import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container text-center'>
      <h1 className='py-5 text-uppercase'>Github profile</h1> {/*py-5 classe do Bootstrap que adiciona um espaçamento acima e abaixo do elemento criado */}
       <form>
         <div className='form-group'>
           <div className='input-group'>
             <input 
             type="text" 
             className='form-control' 
             required/>
             <span className='input-group-btn'>
               <button type='submit' className='btn btn-success'>
                 Search
               </button>
             </span>

             
           </div>
         </div>
       </form>
    </div>
  );
}

export default App;
