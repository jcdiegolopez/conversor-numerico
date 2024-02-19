

const RadioButton = ({name, selected, handleChangeOption}) => {
    return (
        <label
          className="flex bg-indigo-600 items-center shadow-md border-[0.1rem] border-indigo-400 justify-center px-[1vw] py-[1vh] text-gray-100 hover:bg-gray-200 hover:text-gray-800"
          key={name}
          onClick={()=>handleChangeOption(name)}
        >
          <input className="" type="radio" name="radio" value={name} checked={selected}/>
          <span className="ml-2">{name}</span>
        </label>
    );
}

export default RadioButton;