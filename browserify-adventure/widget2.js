var domify = require("domify");

var div = '<div>Hello <span class="name"></span>!</div>';
div = domify(div);

module.exports = function(){
    return {
        setName : function(str){
            return div.querySelector(".name").textContent = str;
        },
        appendTo : function(target){
            target.appendChild(div);
        }
    }
}

