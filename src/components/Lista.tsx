import { List } from "@mui/material"
import ListaItem from "./ListaItem"
import { ItemCarrito } from "../types";

const style = {
  list: {
      width: '100%',
      height: "100%",
      position: 'relative',
      overflow: 'auto',
      paddingBottom: "0",
      '&::-webkit-scrollbar': {
          width: '5px'
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'none',
          webkitBoxShadow: 'none'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#fff',
          outline: 'none'
        }
    }
};

interface IListaProps {
  itemList: ItemCarrito[]
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  setItemList: (value: React.SetStateAction<ItemCarrito[]>) => void
}

const Lista = (props: IListaProps) => {
  const { itemList, total, setTotal, setItemList } = props;
  const handleDelete = (id: string) => {
    setItemList(itemList.filter((item) => item.id !== id))
    const item = itemList.find((item) => item.id === id);
    if (item){
      setTotal(total - Number(item.precio.replace(".", "")));
    }
}
  return (
    <List sx={style.list} component="nav" subheader={<li />} aria-label="items">
      {
        itemList.map((item, key) => (
          <ListaItem nombre={item.nombre} precio={item.precio} key={key} id={item.id} handleDelete={handleDelete}/>
        ))
      }
    </List>
  )
}

export default Lista