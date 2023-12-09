function add(){
    let a=0; let b=0
    a= f.view.value
    b= a.charAt(a.length-1)
     
    if(b==='+' ||b=== '-' ||b==='/' ||b==='*' ){
    f.view.value=a.substring(0,a.length-1)
    f.view.value+='+'
    }else{
        f.view.value+='+'
    }
            }
            function mine(){
                let a=0; let b=0
    a= f.view.value
    b= a.charAt(a.length-1)
     
    if(b==='+' ||b=== '-' ||b==='/' ||b==='*' ){
    f.view.value=a.substring(0,a.length-1)
    f.view.value+='-'
    }else{
        f.view.value+='-'
    }
    }
    function div(){
        let a=0; let b=0
    a= f.view.value
    b= a.charAt(a.length-1)
     
    if(b==='+' ||b=== '-' ||b==='/' ||b==='*' ){
    f.view.value=a.substring(0,a.length-1)
    f.view.value+='/'
    }else{
        f.view.value+='/'
    }
    }
    
    function mult(){
        let a=0; let b=0
    a= f.view.value
    b= a.charAt(a.length-1)
     
    if(b==='+' ||b=== '-' ||b==='/' ||b==='*' ){
    f.view.value=a.substring(0,a.length-1)
    f.view.value+='*'
    }else{
        f.view.value+='*'
    }
    }
    
     
    