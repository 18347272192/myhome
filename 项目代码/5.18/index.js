let data = [
    {a:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic13.nipic.com%2F20110420%2F2531170_133355088479_2.jpg&refer=http%3A%2F%2Fpic13.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623936575&t=bf9ee17ad6fe58a6c03769f94d5bcf57'},
    {a:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs8.sinaimg.cn%2Forignal%2F4b053bf09add6b6eae597&refer=http%3A%2F%2Fs8.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623936617&t=53a7c55fff8176af2709fa946e898d58'},
    {a:'https://img1.baidu.com/it/u=1774624195,4165746313&fm=224&fmt=auto&gp=0.jpg'}
]

function picture(prc){
    let p = new Promise((reslove,reject)=>{
        let a = new Image();
        a.src = prc;
        a.onload=()=>{
            reslove(a)
        }
        a.onerror=()=>{
            reject('失败')
        }
    }).then(data=>{
        document.body.appendChild(data)
    })
    p.catch(err=>{
        console.log(err)
    })
}   
data.forEach(item=>{
    picture(item.a)
})