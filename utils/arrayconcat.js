var selectFields = ['id','name','dueDate']
var selectFieldsStr ='{' 
for(var i = 0, len = selectFields.length; i < len; i++){
    var elm = selectFields[i]
    if(i == (selectFields.length-1)){
        selectFieldsStr+= '"'+elm+'"'+':"true"';
    }else{
        selectFieldsStr+= '"'+elm+'"'+':"true",';
    } 
}
selectFieldsStr+= '}'
var selectFields = JSON.parse(selectFieldsStr)
    console.log(selectFields)
