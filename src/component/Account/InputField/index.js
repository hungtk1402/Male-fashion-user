const InputField = ({ label, type, placeholder, onChange, ...props }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};

export default InputField;
