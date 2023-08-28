// TODO: Vars
const main = document.getElementById('main');
const btnRandom = document.getElementById('randomImg')


// TODO: Containers
const containerImg = document.getElementById('imgContainer')

async function getRandomImg(){
    try{
        const data = await fetch(`https://apiimgsrandom-production.up.railway.app/api/employee/${Math.floor(Math.random() * 50)}`).then((e) => e.json())
    

        containerImg.innerHTML = `
            <img src="${data.url}" width="370px" alt="" style="box-shadow: 0 0 6px rgb(52, 52, 52);">
        `
    } catch(error){
        containerImg.innerHTML = `
            <img src="https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg" width="370px" alt="" style="box-shadow: 0 0 6px rgb(52, 52, 52);">
        `
    }
}

// async function getMethod(){
//     try {
//         const data = await fetch('https://apiimgsrandom-production.up.railway.app/api/employees').then((e) => e.json())
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }

// getMethod()


btnRandom.addEventListener('click', () => {
    getRandomImg()
})
