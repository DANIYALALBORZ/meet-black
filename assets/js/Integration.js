
const myIcon = document.querySelectorAll('#icons>img');
const wIcons = myIcon[0]?.clientWidth
const hIcons = myIcon[0]?.clientHeight



myIcon.forEach(val => {
    val.addEventListener('mousemove', (e) => {

        console(val)
        // let x = ((e.offsetX) / 10) - (wIcons / 20)
        // let y = ((e.offsetY) / 10) - (hIcons / 20)
        // console.log(y);

        // e.target.style.transform = 'perspective(800px) rotateY(' + x + 'deg) rotateX(' + y + 'deg)'
    })
})

