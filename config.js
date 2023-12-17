// metode map 
const dataSiswa = [
  {
    'status_code': 200,
    'messages': 'data siswa kelaas 10',
    'data': [
      {
        'id' : 1,
        'nama': 'muhammad haikal',
        'umur': 16,
        'jurusan' : 'tehnik informatika'
      },
      {
        'id' : 2,
        'nama': 'fizi nur halimah',
        'umur': 19,
        'jurusan' : 'tehnik informatika'
      },
      {
        'id' : 3,
        'nama': 'upin sardadi',
        'umur': 18,
        'jurusan' : 'tehnik informatika'
      }
    ]
  }
]

dataSiswa.map((forSiswa) => {
  console.log(forSiswa);
})




// metode forEach 

const nama_buah = [
    'anggur',
    'semangka',
    'melon',
    'pear',
    'jeruk',
    'magga',
  ]


// nama_buah.forEach((sum, index) => {
//   const tampil_buah = sum
//   const tampil_index = index += 1
//   console.log(`${index} buah ${sum}`);
// })