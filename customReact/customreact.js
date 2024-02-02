function customRender(reactElement,container)
{
    /*
    //Basic way but call for properties in every time
    //we directly not render the reactElement so we make new attribute to show on the web
    const newDomElem=document.createElement(reactElement.type);
    newDomElem.innerHTML=reactElement.children;
    newDomElem.setAttribute('href',reactElement.props.href);
    newDomElem.setAttribute('target',reactElement.props.target);
    container.appendChild(newDomElem);
    */

    //Now we have multiple props for that we use loops
    const newDomElem=document.createElement(reactElement.type);
    newDomElem.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
            newDomElem.setAttribute(prop,reactElement.props[prop])
        }
        container.appendChild(newDomElem)
}
//***** the above is an example how html element converted by babel(binder that help to covert )****/

//This is how react Element look passes in function to render in html 
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
const mainContainer=document.querySelector('#root');
 //Rendering the reactElement to the mainContainer
 customRender(reactElement,mainContainer);


// const reactElem=React.createElement(
//   'a',
//   {
//     href:'https://google.com',target:'_blank'
//   },
//   'click me to visit google'
// )