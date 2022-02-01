import logo from './logo.svg';
import React from 'react';
import GithubImage from 'C:/project/app-name/src/GitHub-Mark.png';
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
       <div className='py-5'>
         <img src={GithubImage} 
         className='responsive rounded-circle' 
         alt="" 
         height='200px'
         />
         <h1 className='pt-5'>
           <a href="https://github.com/CrisMai" target='_new'>Cristiane Mai</a>
         </h1>
         <h3>Palhoça-SC</h3>
       </div>
    </div>
  );
}

export default App;
