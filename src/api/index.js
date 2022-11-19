const baseUrl = 'http://localhost:3000/api';

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
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export async function fetchAllTechs() {
    const url = `${baseUrl}/techs`;

    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = response.json();
        return data
    }
    catch (error) {
        console.log(error)
    }
}