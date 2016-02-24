var request = require('request').defaults({jar: true});

// login
var loginURl = 'http://s2dev.edanzgroup.com/s2test/index.php';
request.post({url:loginURl, form:{
    module:'Users',
    action:'Authenticate',
    return_module:'Users',
    return_action:'Login',
    cant_login:'',
    login_module:'',
    login_action:'',
    login_record:'',
    user_name:'administrator',
    user_password:'edanz1002',
    Login:'Log In'
}},function(err, res, body){
    
    var url = 'http://s2dev.edanzgroup.com/s2test/index.php?module=edanz_Schedule&action=index&view=shared&shared_ids[]=c85001db-0643-bd44-3fd3-52b8dcc99739&due=2015-12-18&point=0#001';
    /*
    request(url, function(error, req, res){
            console.log(res);
    })*/
    var fs = require('fs');
    request(url).pipe(fs.createWriteStream('./editorSchedule.html'));

})

