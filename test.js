// #1

 $.get('domain.com/id', function(id {
    if(id === 'join') {
        $.get('domain.com/list', function(list){
            console.log(list);
        });
    }
 });

function getid() {
    return new Promise(function(resolve, reject) {
        $.get('domain.com/id' , function(id) {
            resolve(id)
        })
    })
}
getid() 
    .then(function(id) {
        if(id === 'join') {
            $.get('domain.com/list', function(list){
                console.log(list);
            });
        }
    })
    catch()

