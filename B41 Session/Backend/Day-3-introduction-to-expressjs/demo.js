const response = fetch("http://localhost:3000/product",
    {
        body: JSON.stringify({name: "John", age: 20}),
    }
)
response.then(data => data.json()).then(data => console.log(data))