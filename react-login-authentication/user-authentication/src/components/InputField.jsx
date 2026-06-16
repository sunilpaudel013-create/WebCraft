function InputField({label,type}){
    return(
        
        <div className="input-group">
                    <label htmlFor={label}>{label}</label>
                    <input type={type} placeholder={`Enter the ${label}`} required />
         </div>
    )
}

export default InputField;