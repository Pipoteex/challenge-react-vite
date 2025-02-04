interface InputProps {
    labelName: string;
    input: string;
    setInput: (value: string) => void;
    name: string;
}

const Input = ({ labelName, input, setInput, name }: InputProps) => {
    console.log(name);

    return (
        <div className="searcher">
            <label>{labelName}</label>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    );
};

export default Input;
