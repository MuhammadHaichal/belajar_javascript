const base_url = 'https://jsonplaceholder.typicode.com/users'

async function get_api() {
  const api = await fetch(base_url)
  hasil = await api.json()
  
  
  hasil.map((data) => {
    console.log({
      'id': data.id,
      'name': data.name,
      'username': data.username,
      'email': data.email,
      'phone' : data.phone,    
      'website' : data.website,    
    });
  })

}

get_api()