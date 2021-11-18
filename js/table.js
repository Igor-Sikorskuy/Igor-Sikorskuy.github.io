var oldcolor;
function applyTableEvents()
{
    var allTableRows = document.getElementsByTagName("tr");
    for(tr of allTableRows)
    {
        tr.onmouseenter = tr.onmouseleave = function(event)
        {
            if(event.type == 'mouseleave')
            {
                event.target.style.background = oldcolor;
            }
            else
            {
                oldcolor = event.target.style.background;
                event.target.style.background = "yellow";
            }
        }
    }
}
