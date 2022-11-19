const baseUrl = 'localhost:3000/api';

// export async function login({ username, password })

export async function fetchAllPatients() {
    const url = `${baseUrl}/patients`;

    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = response.json();
        // console.log(data)
        return data
    }
    catch (error) {
        console.log(error)
    }
}