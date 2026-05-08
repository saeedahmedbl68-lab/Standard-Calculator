function Clean()
{
    document.getElementById("Screen").innerHTML = "";
}

const expression ={
    oprerators: ["+","-","/","*","%"],
    numbers: ["0","1","2","3","4","5","6","7","8","9"]
 }

function keypress(key)
{
    if(document.getElementById("Screen").innerHTML === "2^")
    {
        if(expression.numbers.includes(key))
        {
            document.getElementById("Screen").innerHTML = Math.pow(2 , key);
        }
        return;
    }

    if(key === '0')
    {   
        if(document.getElementById("Screen").innerHTML === '0')
        {
            document.getElementById("Screen").innerHTML = '0'
            return;
        }
        else
        {
            document.getElementById("Screen").innerHTML += key;
            return;
        }
    }
    if(key === '.')
    {
        let ch =document.getElementById("Screen").innerHTML;
        if(ch === '.' || ch === "" || expression.oprerators.includes(ch.slice(-1)))
        {
            return;
        }
        else
        {
            let strng = "";
            for(let i=ch.length-1; i>=0; --i)
            {
                if(expression.oprerators.includes(ch[i]))
                {
                    break;
                }
                else
                {
                    strng = ch[i] + strng;
                }
                
            }

            if(strng.includes('.'))
            {
                return;
            }
            else
            {
                document.getElementById("Screen").innerHTML += key;
            }
        }
    }
    else
    {
        if(expression.oprerators.includes(key))
        {
            if(document.getElementById("Screen").innerHTML === ''
            || document.getElementById("Screen").innerHTML === '0')
            {
            }
            else
            {
                let str= document.getElementById("Screen").innerHTML.slice(-1);
                if(expression.oprerators.includes(str))
                {
                    
                }
                else
                {
                    document.getElementById("Screen").innerHTML += key;
                } 
            }
        }
        if(expression.numbers.includes(key))
        {
            if(document.getElementById("Screen").innerHTML === ''
            || document.getElementById("Screen").innerHTML === '0')
            {
                document.getElementById("Screen").innerHTML = key;
            }
            else
            {
                document.getElementById("Screen").innerHTML += key;
            }
        }
        
    }
}

function Calculation()
{
    if(document.getElementById("Screen").innerHTML === "")
    {
        return;
    }
    let exp= document.getElementById("Screen").innerHTML;
    let result= eval(exp);
    document.getElementById("Screen").innerHTML = result;
}

function Back()
{
    let str =document.getElementById("Screen").innerHTML;
    document.getElementById("Screen").innerHTML = str.slice(0, str.length-1);

}

function OneoverX()
{
    let X = document.getElementById("Screen").innerHTML;

    if(X === "" || X === '.' || X === "0")
    {
        result;
    }
    else
    {
        let result = eval(1/X);
        document.getElementById("Screen").innerHTML = result;
    }
}
function Factorial()
{
    let str= document.getElementById("Screen").innerHTML;

    if(str === "" || str.includes('.') || str.includes('+') ||
     str.includes('-') || str.includes('/') || str.includes('*') ||
      str.includes('%') || str.includes('!') )
    {
        return;
    }
    else
    {
        let n = Number(str);
        let fact =1;
        for(i=1; i<=n; ++i)
        {
            fact = fact * i;
        }

        document.getElementById("Screen").innerHTML = fact;
        
    }
    
}

function Xsquare()
{
    let str= document.getElementById("Screen").innerHTML;

    if(str === "" || str.includes('.') || str.includes('+') ||
     str.includes('-') || str.includes('/') || str.includes('*') ||
      str.includes('%'))
    {
        return;
    }
    let n = Number(str);
    document.getElementById("Screen").innerHTML = (n*n);

}

function SquareRoot()
{
    let str= document.getElementById("Screen").innerHTML;

    if(str === "" || str.includes('.'))
    {
        return;
    }

    let result = eval(str);
    let n = Number(result);

    document.getElementById("Screen").innerHTML = Math.sqrt(n);

}

function Exponential()
{
    let str = document.getElementById("Screen").innerHTML;
    if(str === "")
    {
        document.getElementById("Screen").innerHTML = "2^";
    }
}

