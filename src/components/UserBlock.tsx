function UserBlock(props: { name: string; status: string }) {
    const { name, status } = props;
    const bgColor = status === "active" ? "bg-green-600" : "bg-gray-400";

    return (
        <div
            className={`w-[275px] h-[100px] m-[10px] rounded-[15px] font-bold text-[16px] flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80 ${bgColor}`}
        >
            <strong>{name}</strong>
        </div>
    );
}

export default UserBlock;
