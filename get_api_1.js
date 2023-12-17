const masukin = document.querySelector('.id')
const base_url = 'https://jsonplaceholder.typicode.com/todos'


async function get_api() {
  const api = await fetch(base_url)

  if (api.status == 200) {

    const hasil = await api.json()

    hasil.forEach((hasil) => {
      console.log({
        'id': hasil.id,
        'title': hasil.title,
        'userid': hasil.userId,
      });
    })



    // console.log(hasil);
    // masukin.innerHTML = hasil
  }
  else {
    console.error("erorr")
  }
}


get_api()