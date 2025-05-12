import useUsers from "./hooks/useUsers";
import Loading from "./components/Loading";
import UserList from "./components/UserList";
import "./App.css";

function App() {
    const { isLoading, users } = useUsers("https://gorest.co.in/public/v2/users");

    return (
        <div className="min-h-screen bg-white p-4">
            {" "}
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <h1 className="text-center text-3xl font-bold mb-6">GoRest Users</h1>
                    <UserList users={users} />
                </>
            )}
        </div>
    );
}

export default App;
