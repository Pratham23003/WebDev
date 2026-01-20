const root = document.getElementById('root');

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}
// const reactElement2 = {
//     type: 'p',
//     props: {
//         id: 'para',
//         backgroundColor: 'purple',
//     },
//     children: 'reactElement2 added via customRender()'
// }
customRender(reactElement, root);
// customRender(reactElement2, root);
function customRender(reactElement, root){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href); 
    // domElement.setAttribute('target', reactElement.props.target);
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    root.appendChild(domElement);
}