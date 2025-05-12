import UserBlock from "./UserBlock";

function UserList(props: { users: { id: number; name: string; status: string }[] }) {
    return (
        <div className="flex flex-wrap justify-center">
            {props.users.map((user) => (
                <UserBlock key={user.id} name={user.name} status={user.status} />
            ))}
        </div>
    );
}

export default UserList;
