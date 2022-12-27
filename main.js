let $list = document.querySelector('.list')


let url = "https://www.cbr-xml-daily.ru/daily_json.js"

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        let valute = data.Valute
        Object.keys(valute).forEach(function(elem){
            let item = valute[elem]
            $list.insertAdjacentHTML('beforeend', `
                <div class="valute">
                    <img crossorigin = 'anonymous' src="https://countryflagsapi.com/png/${item.NumCode}">
                    <p>${item.CharCode}</p>
                    <p>${item.Name}</p>
                </div>
            `)
        })
    })






let $listBtn = document.querySelector('#listBtn')
let $calc = document.querySelector('#calc')
let $pageList = document.querySelector('.pageList')
let $pageCalc = document.querySelector('.pageCalc')

$listBtn.addEventListener('click', function(){
    $pageList.classList.remove('hide')
    $pageCalc.classList.add('hide')
})
$calc.addEventListener('click', function(){
    $pageList.classList.add('hide')
    $pageCalc.classList.remove('hide')
})









