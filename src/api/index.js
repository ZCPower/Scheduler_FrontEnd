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


export async function addTech(name, rbt, training, trainer, tricare) {
    const url = `${baseUrl}/techs`

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                rbt: rbt,
                training: training,
                trainer: trainer,
                tricare: tricare,
                dayoff: false
            })

        })
        const data = response.json();
        console.log(data);
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function addPatient(name, needsRbt, tricare, trainOn, groupable) {
    // console.log('IN THE API!!!')
    console.log(name, needsRbt, tricare, trainOn, groupable)
    const url = `${baseUrl}/patients`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                needsRBT: needsRbt,
                tricare: tricare,
                trainOn: trainOn,
                groupable: groupable,
                dayoff: false
            })
        })
        const data = response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteTech(id) {
    const url = `${baseUrl}/techs`

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })

        const data = response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function deletePatient(id) {
    const url = `${baseUrl}/patients`
    console.log(id)
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })

        const data = response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}