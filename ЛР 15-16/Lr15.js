class Point
{
    x;
    y;
    constructor(x,y)
    {
    this.x = x;
    this.y = y;
    }

    Perim()
    {
    return (this.x + this.y) * 2;
    }
}

function Perimetr()
{
    p = new Point(5,6);
    alert(p.Perim());
}
