import React from 'react'

export default function About(props) {

    // const [{backgroundColor : props.mode === 'dark'? '#042743': 'white'}, set{backgroundColor : props.mode === 'dark'? '#042743': 'white'}] = useState({
    //     color:'Black',
    //     backgroundColor:'white'
    // });
    
    let myStyle = {
        color : props.mode === 'dark'? 'white':'black',
        backgroundColor : props.mode === 'dark'? '#042743':'white',
    }

    // const [btnText, setbtnText] = useState("Enable Dark Mode");
    // let handleClick = () =>{
    //     if ({backgroundColor : props.mode === 'dark'? '#042743': 'white'}.color === 'white'){
    //         set{backgroundColor : props.mode === 'dark'? '#042743': 'white'}({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    //     else{
    //         set{backgroundColor : props.mode === 'dark'? '#042743': 'white'}({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setbtnText("Disable Dark Mode");
    //     }
    // }

  return (
    <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>About Us</h1>
        <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first Analyzer Tool.</strong> When analyzing text, we can look at several factors such as the language used, the structure and organization of the text, the tone and style, and the overall message conveyed.
                    For example, if your text is a persuasive essay, I could analyze the language used to see if it is convincing or if it contains logical fallacies. I could also look at the structure of the essay to see if it follows a clear and effective argumentative structure.
                </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free To Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong> It typically means that visitors can access the website's content and features without having to pay any fees or subscriptions. </strong> "free to use" can be a helpful label for users who are looking for accessible and affordable options, but it's important to carefully review the terms and conditions of any product or service before using it to ensure that you are using it appropriately and legally.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong> Browser compatibility </strong> refers to the ability of a website or web application to function properly and display correctly across different web browsers, such as Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. Since different browsers can interpret and render code differently, it's important for web developers to ensure that their websites and applications are compatible with multiple browsers in order to reach a wider audience and provide a consistent user experience.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
