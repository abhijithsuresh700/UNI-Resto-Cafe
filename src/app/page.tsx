import Navbar from "../components/Navbar";
import MenuList from "../components/MenuList";
import axios from "axios";


async function fetch(){
  const res = await axios.get(`https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`)
  const response = res?.data?.[0];
  return response;
}


export default async function Home() {
    const details = await fetch()
  const name = details.restaurant_name
  const tableMenuList = details.table_menu_list


  return (
    <main>
        <Navbar name={name as string}/>
        <MenuList list={tableMenuList as []} />
    </main>
  );
}