function ThisIsTheTitle(props)
{
  return (
    <div>  
      <h1>{props.header}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  )
}

function ThisIsTheContent(props)
{
  return(
     <div>
        <h3>{props.header}</h3>      
        {props.tickBox}<input type="checkbox"/>
      <div>
         <p/>{props.selectHeading}
         <select>
            <option>{props.option[0]}</option>
            <option>{props.option[1]}</option>
            <option>{props.option[2]}</option>
            <option>{props.option[3]}</option>
         </select>
      </div>       
    </div>
        )
}

function TypeOfVehicle(props)
{
  return <h3>{props.name}</h3>
}

function Table(props)
{
  return <div>
    <table>
      <tr>
        <th>{props.headings[0]}</th>
        <th>{props.headings[1]}</th>
        <th>{props.headings[2]}</th>
        <th>{props.headings[3]}</th>
      </tr>
        <td>{props.year}</td>
        <td>{props.model}</td>
        <td>{props.price}</td>
      <td><button>{props.buy}</button></td>
    </table>
    <br/>
    </div>
}
    function Combine(props){

        return (
            <div>
                <ThisIsTheTitle header = "Welcome to React Transportation" subtitle = "The best place to buy vehicles online"/>
                <ThisIsTheContent header = "Choose Options" tickBox="New Only" selectHeading="Select Type" option={["All","Cars","Trucks","Convertibles"]}/>
                <TypeOfVehicle name="Cars"/>
                                 <Table headings={["Year","Model","Price","Buy"]} year="2011" model="B" price="$4400" buy="Buy Now"/>
            
            <Table headings={["Year","Model","Price","Buy"]} year="2013" model="A" price="$32000" buy="Buy Now"/>
            <Table headings={["Year","Model","Price","Buy"]} year="2016" model="B" price="$15500" buy="Buy Now"/>
                <TypeOfVehicle name="Trucks"/>
       <Table headings={["Year","Model","Price","Buy"]} year="2014" model="D" price="$18000" buy="Buy Now"/>
            
                <Table headings={["Year","Model","Price","Buy"]} year="2013" model="E" price="$5200" buy="Buy Now"/>
                <TypeOfVehicle name="Convertibles"/>
            
            
                <Table headings={["Year","Model","Price","Buy"]} year="2009" model="F" price="$2000" buy="Buy Now"/>
            
                <Table headings={["Year","Model","Price","Buy"]} year="2010" model="G" price="$6000" buy="Buy Now"/>
            
                <Table headings={["Year","Model","Price","Buy"]} year="2012" model="H" price="$12500" buy="Buy Now"/>
            
                <Table headings={["Year","Model","Price","Buy"]} year="2017" model="M" price="$50000" buy="Buy Now"/>
               </div>
        )
    }

    ReactDOM.render(
        <Combine/>,
        document.getElementById("root")
    )
     