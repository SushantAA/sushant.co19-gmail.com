alert("connected");
let game = true;
let  board = [
 [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
];

const Board = document.querySelector("#board");
const hight = screen.height, width = screen.width;
let Board_html = Board.innerHTML;
console.log(typeof(Board_html));
console.log(hight,width);
let Board_row = '';

// Dikshitras algo
// let map = new Map();
// const Graph_add = (node_id,neighbour_id) =>
// {
//     if(map.has(node_id))
//     {
//         map.get(node_id).push(neighbour_id);
//     }else{
//         let arr = [];
//         arr.push(neighbour_id);
//         map.set(node_id,arr);
//     }
// }

// let distance = new Map();

// const Path = (start_node,end_node) =>{
//     if( document.querySelector("#"+start_node).className=="wall")   return ;
//     if(start_node==end_node)    return ;
//     let s = map.get(start_node);
//         for(let i=0;i<s.length;i++)
//         { 
//             let cd = distance.get(start_node)+1;
//             if((distance.has(s[i])===false || distance.get(s[i])>=cd) &&  document.querySelector("#"+s[i]).className!="wall" )  {   distance.set(s[i],cd);
//             document.querySelector('#'+s[i]).classList.add("visited");
//             document.querySelector('#'+s[i]).classList.remove("boxes"); }
//         }
//     let d=1000,idx=0;
//     let ref = new Map();
//     for(let i=0;i<s.length;i++)
//     {
//         if(d>distance.get(s[i]) && s.length!=0)
//         {
//             d = distance.get(s[i]);
//             idx = i;
//         }
//         ref.set(distance.get[s[i]],s[i]);
//     }
//     // Path(s[idx],end_node);


//     function logMapElements(value, key, map) {
//         console.log(value);
//         if(distance.has("#"+value)===false){
//         Path(value,end_node);}
//     }
//     ref.forEach(logMapElements)
// }

//******************      DP    ***********************//
const way = () =>{
for(let i=1;i<=19;i++)
{
    board[i][0] = board[i][0]+board[i-1][0];
}
for(let i=1;i<=36;i++)
{
    board[0][i] = board[0][i] + board[0][i-1];
}
for(let i=1;i<=19;i++)
{
    for(let j=1;j<=36;j++)
    {
        board[i][j] = Math.min(board[i-1][j-1],board[i-1][j],board[i][j-1]) + board[i][j] ;
    }
}
console.log("end of way");
// const box_visit = (i,j) =>{
//     let id ='a'+ i.toString() + 'b'+j.toString();
//     console.log(id);
//     document.querySelector("#" + id).classList.add("visited");
//     document.querySelector("#" + id).classList.remove("boxes");
// }
let ix = 19, jx=36;
let road=[];
let check_in_road=(i,j)=>
{
    let id ='a'+ (i).toString() + 'b'+(j).toString();
    for(let f=0;f<road.length;f++)
    {
        if(road[f]==id){
            return false;
        }
    }
    return true;
}
let c=0;
while(ix>=0 && jx>=0)
{
     c = 9999999;
    let tx =-1,ty=-1;
    if(ix-1>=0 && jx-1>=0 && board[ix-1][jx-1]<c && check_in_road(ix-1,jx-1) )
    {
        c=board[ix-1][jx-1];
        tx = ix-1;
        ty = jx-1;
    }
    if(ix-1>=0 && jx>=0 && board[ix-1][jx]<c&& check_in_road(ix-1,jx) )
    {
        c= board[ix-1][jx];
        tx = ix-1;
        ty = jx;
    }
    if(ix-1>=0 && jx+1<=36 && board[ix-1][jx+1]<c && check_in_road(ix-1,jx+1) )
    {
        c= board[ix-1][jx+1];
        tx = ix -1;
        ty = jx+1;
    }

    if(ix>=0 && jx-1>=0 && board[ix][jx-1]<c&& check_in_road(ix,jx-1) )
    {
        c=board[ix][jx-1];
        tx = ix;
        ty = jx-1;
    }
    if(ix>=0 && jx+1<=36 && board[ix][jx+1]<c && check_in_road(ix,jx+1) )
    {
        c=board[ix][jx+1];
        tx = ix;
        ty = jx+1;
    }

    if(ix+1<=19 && jx-1>=0 && board[ix+1][jx-1]<c && check_in_road(ix+1,jx-1) )
    {
        c=board[ix+1][jx-1];
        tx = ix+1;
        ty = jx+1;
    }
    if(ix+1<=19 && jx>=0 && board[ix+1][jx]<c && check_in_road(ix+1,jx) )
    {
        c=board[ix+1][jx];
        tx = ix+1;
        ty = jx;
    }
    if(ix+1<=19 && jx+1<=36 && board[ix+1][jx+1] && check_in_road(ix+1,jx+1) )
    {
        c=board[ix+1][jx+1];
        tx = ix+1;
        ty = jx+1;
    }
    
    let id ='a'+ (tx).toString() + 'b'+(ty).toString();
    ix = tx;
    jx = ty;
    console.log(id);
    document.querySelector("#"+id).classList.remove("boxes");
    document.querySelector("#"+id).classList.add("road");
    road.push(id);
    c = 9999999;
}
// for(let i=road.length-1;i>=0;i--)
// {
//     document.querySelector("#"+road[i]).classList.remove("boxes");
//     document.querySelector("#"+road[i]).classList.add("road");
// }
}

const make_board = () =>{
    for(let i=0;i<hight/44;i++)
    {
        let row = 'row'+i;
        let Board_col = '<div>'; 
        for(let j =0;j<width/42;j++)
        {
            let id ='a'+ i.toString() + 'b'+j.toString();
            // if(i+1<=19 && j+1<=36)          Graph_add(id,'a'+(i+1).toString() + 'b'+(j+1).toString());
            // if(i+1<=19 && j<=36)            Graph_add(id,'a'+(i+1).toString() + 'b'+j.toString());
            // if(i+1<=19 && j-1>=0)           Graph_add(id,'a'+(i+1).toString() + 'b'+(j-1).toString());

            // if(i<=19   && j+1<=36)          Graph_add(id,'a'+i.toString() + 'b'+(j+1).toString());
            // if(i<=19   && j-1>=0)           Graph_add(id,'a'+i.toString() + 'b'+(j-1).toString());

            // if(i-1>=0  && j+1<=36)          Graph_add(id,'a'+(i-1).toString() + 'b'+(j+1).toString());
            // if(i-1>=0  && j<=36)            Graph_add(id,'a'+(i-1).toString() + 'b'+j.toString());
            // if(i-1>=0  && j-1>=0)           Graph_add(id,'a'+(i-1).toString() + 'b'+(j-1).toString());
            let html = '<div id =\"' + id + '\"class = ' + '"boxes"' + ' ></div>';
            Board_col = Board_col + html;
        }
        Board_row = Board_row + Board_col + '</div>';
    }
    Board.innerHTML = Board_row;
}
make_board();

// let box_dom = document.querySelectorAll(".boxes");
// $(".boxes").mouseup(function(){
//     $(this).toggleClass("boxes");
//     $(this).toggleClass("wall");
// });

//      RANDOM WALLS

const mark_wall=(i,j)=>{
    board[i][j]=999;
    let id ='a'+ i.toString() + 'b'+j.toString();
    document.querySelector('#'+id).classList.remove("boxes");
    document.querySelector('#'+id).classList.add("wall");
}

const random_wall=()=>
{
    for(let k=0;k< parseInt(document.getElementById("demo").innerHTML)*3 ;k++)
    {
        let y = Math.floor(Math.random()*20);
        let x = Math.floor(Math.random()*36);
        while(board[y][x]==999)
        {
            y = Math.floor(Math.random()*20);
            x = Math.floor(Math.random()*36);
        }
        if(x===0    &&  y===0)  continue;
        if(y===19   &&  x===36) continue;
        console.log(y,x);
        mark_wall(y,x);
    }
}

const check = (i,j) =>
{
    if(i>=1 && j>=1){    
    let id ='a'+ (i-1).toString() + 'b'+(j-1).toString();
    let a = document.querySelector("#"+id).className;
    if(a == "move")   return true;  }

    if(i>=1 && j>=0 ){    
    id ='a'+ (i-1).toString() + 'b'+(j).toString();
    a = document.querySelector("#"+id).className;
    if(a == "move")   return true;}

    if(i>=1 && j<=36){    
    id ='a'+ (i-1).toString() + 'b'+(j+1).toString();
    a = document.querySelector("#"+id).className;
    if(a == "move")   return true;}

    if(i>=0 && j>=1){    
    id ='a'+ (i).toString() + 'b'+(j-1).toString();
    a = document.querySelector("#"+id).className;
    if(a == "move")   return true;}

    if(i>=0 && j<=36){    
    id ='a'+ (i).toString() + 'b'+(j+1).toString();
    a = document.querySelector("#"+id).className;
    if(a == "move")   return true;}

    if( j>=1 && i<=19){    
    id ='a'+ (i+1).toString() + 'b'+(j-1).toString();
    a = document.querySelector("#"+id).className;
    if(a == "move")   return true;}

    if(j>=0 && j<=36){    
    id ='a'+ (i+1).toString() + 'b'+(j).toString();
    a = document.querySelector("#"+id).className;
    if(a == "move")   return true;}

    if( i<=19 && j<=36){    
    id ='a'+ (i+1).toString() + 'b'+(j+1).toString();
    a = document.querySelector("#"+id).className;
    if(a == "move")   return true;
    }
    return false;
}

let m =false;
$(".boxes").mousedown(function() {
    if(game===true){
    console.log("mouse down   --->  "+ this.id);
    m= true;}
}).mouseover(function(){
    if(m===true ){
    console.log("mouseover   "  +  this.id);
    let id = this.id;
    let x=2;
    let i=id[1],j='';
    while(id[x]!='b')
    {
        i=i+id[x];
        x++;
    }
    x++;
    while(x!=id.length)
    {
        j=j+id[x];
        x++;
    }
    i = parseInt(i);
    j = parseInt(j);
    if(i==19 && j==36){
        game=false
        alert("You won");
    }   
    if(board[i][j]!=999 && check(i,j) )
    {
        document.querySelector("#"+id).classList.remove("boxes");
        document.querySelector("#"+id).classList.add("move");
        console.log(id);
    }
    }
}).mouseup(function() {
    if(game==true){
    console.log("mouse up   --->    "+ this.id);
    m = false;}
});
function performWhileMouseDown(id) {
    console.log("mouseenter  --->   " +id);
    if(m==false)        return ;
    let x=2;
    let i=id[1],j='';
    while(id[x]!='b')
    {
        i=i+id[x];
        x++;
    }
    x++;
    while(x!=id.length)
    {
        j=j+id[x];
        x++;
    }
    i = parseInt(i);
    j = parseInt(j);
    if(i==19 && j==36){
        game=false
        alert("You won");
    }   
    if(board[i][j]!=999)
    {
        document.querySelector("#"+id).classList.remove("boxes");
        document.querySelector("#"+id).classList.add("move");
        console.log(id);
    }else {
        console.log("done");
    }
}

// $(".boxes").mousedown(function(){
//     // console.log(map.get(this.id));
//     // map.set(this.id,[]);
//     let id = this.id;
//     let x=2;
//     let i=id[1],j='';
//     console.log(id);
//     while(id[x]!='b')
//     {
//         i=i+id[x];
//         x++;
//     }
//     x++;
//     while(x!=id.length)
//     {
//         j=j+id[x];
//         x++;
//     }
//     i = parseInt(i);
//     j = parseInt(j);
//     if(i==19 && j==36){
//         game=false
//         alert("You won");
//     }   
//     if(board[i][j]!=999)
//     {
//     $(this).toggleClass("boxes");
//     $(this).toggleClass("move");
//     }
// });

const Nodes = document.querySelectorAll(".boxes");
const start = Nodes[0] ,  end = Nodes[739]  ;
start.classList.remove("boxes");
start.classList.add("move");
end.classList.remove("boxes");
end.classList.add("end");

random_wall();

document.querySelector("#Path").addEventListener("click",function(){
    way();
});

document.querySelector("#Play_Again").addEventListener("click",function(){
    game = true;
    for(let i=0;i<=19;i++)
    {
        for(let j=0;j<=36;j++)
        {
            let id ='a'+ i.toString() + 'b'+j.toString();
            document.querySelector("#"+id).classList="boxes";
        }
    }

    board = [
        [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ];

    console.log("creating wall");
    random_wall();
    console.log("wall created");
    start.classList.remove("boxes");
    start.classList.add("move");
    end.classList.remove("boxes");
    end.classList.add("end");
    board[0][0]=1;
    board[19][36]=37;
})


const Game_PLay = () =>{
    game = true;
    for(let i=0;i<=19;i++)
    {
        for(let j=0;j<=36;j++)
        {
            let id ='a'+ i.toString() + 'b'+j.toString();
            document.querySelector("#"+id).classList="boxes";
        }
    }

    board = [
        [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ,[ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]
       ]; 

    console.log("creating wall");
    random_wall();
    console.log("wall created");
    start.classList.remove("boxes");
    start.classList.add("move");
    end.classList.remove("boxes");
    end.classList.add("end");
    board[0][0]=1;
    board[19][36]=37;
}


//              Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    Game_PLay();
    output.innerHTML = this.value;
}

//              Game Starter
Game_PLay();


$("#a0b0").fadeOut();