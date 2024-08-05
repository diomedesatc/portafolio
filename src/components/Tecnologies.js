import React from 'react';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';


const Tecnologies = () => {
  return (
    <div className='tecnologias-items'>
        <h1 className='title'>Tecnologias</h1>
        <ul>
            <li className='tecnologia-icon'><HtmlIcon fontSize='large' color='primary' /></li>
            <li className='tecnologia-icon'><CssIcon fontSize='large' color='primary' /></li>
            <li className='tecnologia-icon'><JavascriptIcon fontSize='large' color='primary' /></li>
            <li className='tecnologia-icon'><CodeIcon fontSize='large' color='primary' /> C#</li>
            <li className='tecnologia-icon'><GitHubIcon fontSize='large' color='primary'/> Git</li>
            <li className='tecnologia-icon'><CodeIcon fontSize='large' color='primary'/> Node.js</li> 
            <li className='tecnologia-icon'><CodeIcon fontSize='large' color='primary'/> Express.js</li>
            <li className='tecnologia-icon'><CodeIcon fontSize='large' color='primary' /> React</li>
            <li className='tecnologia-icon'><StorageIcon fontSize='large' color='primary'/> Postgresql</li>            
            <li className='tecnologia-icon'><StorageIcon fontSize='large' color='primary'/> MongoDB</li>
        </ul>
      
    </div>
  )
}

export default Tecnologies
