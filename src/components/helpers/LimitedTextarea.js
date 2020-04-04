export const LimitedTextarea = ({ rows, cols, value, limit }) => {
    const [content, setContent] = React.useState(value);

    const setFormattedContent = text => {
        text.length > limit ? setContent(text.slice(0, limit)) : setContent(text);
    };

    React.useEffect(() => {
        setFormattedContent(content);
    }, []);

    return (
        <div>
            <textarea
                rows={rows}
                cols={cols}
                onChange={event => setFormattedContent(event.target.value)}
                value={content}
            />
            <p>
                {content.length}/{limit}
            </p>
        </div>
    );
}

/* <LimitedTextarea limit={32} value='Hello!' /> */

export const TextArea = ({ callback, cols = 20, rows = 2, disabled = false, readOnly = false, placeholder = '' }) => {
    return (
        <textarea
            cols={cols}
            rows={rows}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
            onChange={({ target: { value } }) => callback(value)}
        />
    );
}

/* <TextArea placeholder='Insert some text here...' callback={(val) => console.log(val)}/> */