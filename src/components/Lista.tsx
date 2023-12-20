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
  setItemList: (value: React.SetStateAction<ItemCarrito[]>) => void
}

const Lista = (props: IListaProps) => {
  const { itemList, setItemList } = props;
  const handleDelete = (id: string) => {
    setItemList(itemList.filter((item) => item.id !== id))
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