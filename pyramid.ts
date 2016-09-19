function out(m : number) : void
{
    for(var i : number = 1; i <= m ; i++)
    {
        var a : string = "";
        for(var j : number = 1;j <= m - i;j++)
        {
            var space : string = " ";
            a = a + space;
        }
        
        for(var k : number = 1;k <= 2*i - 1;k++)
        {
            var star : string = "*";
            a = a + star;
        }
        console.log(a);
    }
}

var m : number = 5;
out(m); 
