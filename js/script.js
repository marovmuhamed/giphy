const API = 'http://api.giphy.com/v1/gifs/search?q='
const KEY = '&api_key=vQNKDBZImAydWE01LbapzK8370VfOEaO'

const LIMIT = '&limit=10'


const search_giphy_by_name=async ()=>{
    let text = document.getElementById('txt').value
    let url = API+text+KEY+LIMIT
    console.log(url);
    const res = await fetch(url)
    const req = await res.json()
    console.log(req.data);
    renderGiphy(req.data)
}
let output = document.getElementById('output')
const renderGiphy =(giphys)=>{

output.innerHTML= '<h1>Loading</h1>'


giphys.map(el=>{
   let ifrm = document.createElement('iframe')
   let name = document.createElement('h3')
   ifrm.scr=el.embed_url
   ifrm.widht='300px'
   ifrm.height='150px'
   name.textContent=el.title
   output.append(ifrm, name)
    

})

}