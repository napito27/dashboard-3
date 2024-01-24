
function ImgButton(props) {

  return (
    <button 
      onClick={props.onClick} 
      className={props.className}
    >
      <img 
        src={props.src} 
        alt={props.alt}
        style={{width:'20px', height:'20px', marginRight:'8px'}}
      />
      {props.label}
    </button>
  );
}

function Button(props) {

  return (
    <button 
      onClick={props.onClick} 
      className={props.className}
    >
      {props.label}
    </button>
  );
}

export { Button, ImgButton };