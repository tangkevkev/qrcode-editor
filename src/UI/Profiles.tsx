
interface ProfileProps{
    name: string,
    age: number
}


export default function Profile(props: ProfileProps){

   
  return (
    <div >
        {props.name}
        <br/>
        {props.age}
    </div>
  );

}