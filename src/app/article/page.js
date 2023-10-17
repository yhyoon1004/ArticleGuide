

export default function Page(){
    const sample = (type)=>{
        return "your my "+type;
    }

    return(<>
        <div>Hello this is Article List Page</div>
        {sample(`yunhwan's`)}
    </>)
}