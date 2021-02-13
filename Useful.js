    function regSomething(str, reg){
        return reg.exec(str);
    }

    function getTitle(){
        var array = Array.prototype.slice.call(arguments);
        return array.join(" ");
    }

    function xpathToArray(xpath){
        var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
        var array = [];
        var iter;
        while(iter = result.iterateNext()){
            array.push(iter);
        }
        return array;
    }

    function addToAltEventListener(key, func){
        let result;
        document.addEventListener("keydown", (event) => {
            if(event.altKey){
                if(event.which === key){
                    result = func();
                }
            }
        });
        return result;
    }

    function exists(element){
        return element.offsetHeight != 0 && element.offsetWidth != 0;
	}
	
	function helllo(){
	alert("Works!!!");
}