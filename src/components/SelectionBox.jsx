import RadioButton from "./RadioButton";


const SelectionBox = ( {options = null, handleChangeOption} ) => {
    return(
    <div className="rounded-md border border-gray-300 min-w-[10vw] text-base mt-[1rem]">
      <div className="flex flex-wrap">
        {options.map((option,index) => <RadioButton key={index} name={option.name} selected={option.selected} handleChangeOption={handleChangeOption}/>)}
      </div>
    </div>
    );
}

export default SelectionBox;