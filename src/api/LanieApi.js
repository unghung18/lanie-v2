const baseUrl = "https://lanie-backend-mongodb.onrender.com/api"

export async function logIn(body) {

    const res = await fetch(`${baseUrl}/auth/sign-in`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const data = await res.json()
    return data
}

export async function register(body) {

    const res = await fetch(`${baseUrl}/auth/sign-up`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const data = await res.json()
    return data
}


export async function getLatestProducts() {

    const res = await fetch(`${baseUrl}/products/latest-products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await res.json()
    return data
}

export async function getSaleProducts(query) {

    const res = await fetch(`${baseUrl}/products/sale?${query}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await res.json()
    return data
}

export async function getProducts(query) {

    const res = await fetch(`${baseUrl}/products?${query}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await res.json()
    return data
}

export async function getOneProducts(id) {

    const res = await fetch(`${baseUrl}/products/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await res.json()
    return data
}

export async function getCollections() {

    const res = await fetch(`${baseUrl}/collections`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await res.json()
    return data
}


