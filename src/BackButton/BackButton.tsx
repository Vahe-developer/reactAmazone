import React from 'react'
import Button from '@material-ui/core/Button'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

export default <Button style={{color: 'white', background: 'black'}}
                       onClick={() => window.history.back()}><ChevronLeftIcon/></Button>



// import React from 'react'
// import {default as MaterialButton} from '@material-ui/core/Button'
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
//
// const Button = () => {
//     return (
//         <MaterialButton
//             style={{color: 'white', background: 'black'}}
//             onClick={() => window.history.back()}
//         >
//             <ChevronLeftIcon/>
//         </MaterialButton>
//     )
// }
//
// export default Button
