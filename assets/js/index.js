if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("sw register");
        console.log(registration)
    }).catch(err=>{
        console.log('err');
        console.log(err);
    })
}