let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let capchaResponse = grecaptcha.getResponse();
    if (!capchaResponse.length > 0) {
        throw new Error("Capcha not complete")
    }
    const fd = FormData(e.target);
    const params = new URLSeachParams(fd);
    fetch("http://httpbin.org/post", {
      method: "POST",
      body: params,
    })
    .then((res) => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
            
})