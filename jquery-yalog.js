// make sure logging doesn't raise
(function(a){
    a.extend({
        log:function(){
            if(arguments.length>0){
                var b=(arguments.length>1) ? Array.prototype.join.call(arguments," ") : arguments[0];
                try{
                    console.log(b);
                    return true;
                } catch(c) {
                    try{
                        opera.postError(b);
                        return true;
                       } catch(c) { 
                       }
                }
                return false;
            }
        }
    });
})(jQuery);