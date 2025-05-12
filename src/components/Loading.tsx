function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex space-x-2">
                <span className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:0s]"></span>
                <span className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
        </div>
    );
}
export default Loading;
