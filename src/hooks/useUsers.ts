import { useEffect, useState } from "react";

function useUsers(apiUrl: string) {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            setIsLoading(true);
            await new Promise((res) => setTimeout(res, 1500));
            const response = await fetch(apiUrl);
            const data = await response.json();
            setUsers(data);
            setIsLoading(false);
        }

        fetchUsers();
    }, [apiUrl]);

    return { isLoading, users };
}

export default useUsers;
