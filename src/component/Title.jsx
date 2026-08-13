
const Title = ({children}) => {
    return (
        <div className="p-5 bg-linear-60 from-yellow-300 to-yellow-600 rounded-2xl">
            <h1 className="text-4xl font-bold">{children}</h1>
        </div>
    );
};

export default Title;